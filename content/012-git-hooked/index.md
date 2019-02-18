---
title: Git Hooked
cover: 'https://images.unsplash.com/photo-1495482237874-2abe1e1c92dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
date: '2018-01-27'
description: Introduction to Git Hooks
slug: 'blog/012-git-hooked'
category: 'tutorial'
tags:
  - git
  - git hooks
---

There are many ways to ensure code quality, often in some form of linting and formatting tools alongside a CI tool (TravisCI, Jenkins, Bitbucket pipelines, etc). Something small like a missing semi-colon or inconsistent spacing may not change how your code runs in development, but once you minify for production it could cause errors.

So what if you want to ensure your code passes _before_ you push and blast out that CI build error on Slack, without having to remember to run your linting or code formatting tools manually?

Enter: Git hooks.

Git hooks are scripts that are run based on triggers that get fired at various points in your Git workflow, most commonly before or after committing, pushing, or receiving code. Since this is Javascript January, we’ll stick to the theme, but you can use these same patterns for any language or project you may be working on. This post assumes that you know about linting, especially in Javascript land. If not, check out [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/), my favorite linter and formatter.

If you’re already a Git hook whiz, skip ahead to check out [Husky](#side-stepping-git-hooks-altogether) to learn about setting up hooks through your project's `package.json`.

## How to Use a Git Hook

Your git repository is automatically initialized with some example hooks. They live in the root of your repository inside the `.git/hooks` directory and are named based on the type of trigger you want to run the script on. Your script file can be any executable, though we’ll use shell scripts for our examples.

Here’s an example of the default git hooks:

```sh
.git/hooks
├── applypatch-msg.sample
├── commit-msg.sample
├── post-checkout
├── post-update.sample
├── pre-applypatch.sample
├── pre-commit.sample
├── pre-push.sample
├── pre-rebase.sample
├── pre-receive.sample
├── prepare-commit-msg.sample
└── update.sample
```

To use a git hook, simply create the script and make sure it’s executable (`chmod +x <filename>`). If you’re using one of the sample files, make sure to remove the `.sample` extension.

_Pro-tip:_ If you want to run the same script on different triggers, simply create the first trigger script and symlink the duplicates.

## Your First Git Hooks

The following two examples are a couple of my go-to hooks that any Javascript project I’m working on has. Simply add these to your `.git/hooks` directory in the appropriate file and make sure the scripts are executable.

### Lint and Format Your Code before committing

This hook runs before you commit your code and will only run on your staged Javascript files. It runs Prettier for code formatting then runs ESLint to check for any linting errors. If it passes, your commit will go through. Otherwise, it will alert you and stop the commit process so you can make changes.

```sh
#!/bin/sh
# pre-commit

STAGED_JS_FILES=$(git diff --cached --name-only --diff-filter=ACM "*.js" "*.jsx" | tr '\n' ' ')
[ -z "$STAGED_JS_FILES" ]

# Git pre commit hook. ---------------------------------------------------------
# Runs Prettier on staged .js files
echo "** Formatting Javascript files..."
# Prettify all staged .js files
echo "$STAGED_JS_FILES" | xargs ./node_modules/.bin/prettier --write
# Add back the modified/prettified files to staging
echo "$STAGED_JS_FILES" | xargs git add


# Git pre commit hook. ---------------------------------------------------------
# Runs ESLint on staged .js or .jsx files
# STAGED_JS_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep ".js\{0,1\}$")
RED='\033[1;31m'
GREEN='\033[0;32m'
NC='\033[0m'
PASS=true

if [[ "$STAGED_JS_FILES" = "" ]]; then
  echo "\n** No Javascript files are currently staged."
  exit 0
fi

echo "\n** Linting Javascript files..."
for FILE in $STAGED_JS_FILES
do
  ./node_modules/.bin/eslint "$FILE"

  if [[ "$?" != 0 ]]; then
    PASS=false
  fi
done

if ! $PASS; then
  echo "\n${RED}COMMIT FAILED:${NC}\n\tYour commit contains files that should pass ESLint but do not. Please fix the ESLint errors and try again.\n\tTo override this validation, use --no-verify"
  exit 1
else
  echo "\n${GREEN}COMMIT SUCCEEDED${NC}"
fi

exit $?
```

### Checking Dependencies When Checking Out

This hook runs after you checkout a new branch or commit. It checks to see if your `package.json` has changed in order to check if any dependencies differ. This works great if you’re working on a feature branch that has new dependencies and you need to switch around. It looks for changes in the whole file and doesn’t account for differences in things like version numbers, so keep that in mind.

```sh
#!/bin/bash
# post-checkout

# Git post checkout hook. ------------------------------------------------------
# Reminds you to update requirements, if necessary

PREVIOUS_HEAD=$1
NEW_HEAD=$2
BRANCH_SWITCH=$3

if [ $BRANCH_SWITCH == "1" -a $PREVIOUS_HEAD != $NEW_HEAD ]; then
    # Start from the repository root.
    cd ./$(git rev-parse --show-cdup)

    # Check if requirements have been updated - npm/yarn
    REQUIREMENTS=`git diff $PREVIOUS_HEAD $NEW_HEAD --name-status | grep "package.json"`
    if [ $? -eq "0" ]; then
        echo "\nThe requirements for this project may have changed. Update dependencies by running:"
        echo "  yarn install"
    fi
fi
```

## Managing Git Hooks

### Manual Hook Wrangling

Manually managing your git hooks is one of easiest way to get started, but makes sharing hooks a bit more difficult (don't worry, we'll talk about tips for this later).
Git hooks can be easily managed locally by using a `.git-template` directory. You can store all of your “default” scripts inside of your template directory and they will automatically be added to your repository each time you run a `git init`, as long as an existing hook with the same name doesn’t already exist. You can run `git init` either when starting a project or in an existing project to grab any new Git hooks.

### Sharing Git Hooks

The traditional way of managing Git hooks has some drawbacks, particularly that since they’re stored in your `.git` directory by default. This means they aren’t tracked in your repository.

You could set up a system where your hooks are tracked outside of your `.git` directory, say in a `.hooks` directory, then set up a script to symlink your files into your `.git/hooks` directory ([check out a working example here](https://github.com/emilyemorehouse/git-hooked/tree/githook-dir-symlinked)). Alternatively, you can configure Git to simply pull hooks from a different directory altogether by running `git config core.hooksPath .hooks` ([check out another example here](https://github.com/emilyemorehouse/git-hooked/tree/githook-dir-config)).

### Side-Stepping Git Hooks Altogether

If you’ve gone through the trouble of setting up linting or code formatting, you’ve probably already set up a script to run with something like `npm run lint`. With the help of a tool called [Husky](https://github.com/typicode/husky/tree/master), we can leverage our scripts that we’ve already set up by using them as Git hooks.

First, install Husky:
`npm install husky --save-dev`

Then add your existing scripts as triggers in your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint --ext js --ext jsx src",
    "format": "prettier 'src/**/*.{js,jsx}' --write",
    "precommit": "npm run lint && npm run format"
  },
  ...
}
```

That’s it! Husky will manage all of your Git hooks for you and will run your lint and format command as a pre-commit hook.

For more information, check out the [Git documentation on Git hooks](https://git-scm.com/book/gr/v2/Customizing-Git-Git-Hooks) and check out the [demo repository](https://github.com/emilyemorehouse/git-hooked).
