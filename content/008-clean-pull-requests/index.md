---
title: Clean Pull Requests with Git
cover: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80'
date: '2017-01-24'
description: Quick tips on ensuring that your PRs are clean and easy to merge.
slug: 'blog/008-clean-pull-requests'
category: 'tutorial'
tags:
  - osx
  - workflow
---

Sometimes you forget to branch off master. Sometimes you need to branch off something besides master, but only want to PR some of your changes (like if a critical error was fixed on a branch but hasn’t been pulled into master yet).

For me, cherry-picking is critical to ensuring super clean pull requests.

```sh
git checkout master
git checkout -b feature/clean-feature-branch
git cherry-pick f1b62817d9^..98d2bba6d0
git push origin feature/clean-feature-branch
```

Essentially what we want to do is create a fresh branch off master, or whichever branch you will request to be merged into (which may be a feature branch if the feature has not been completed). Then cherry-pick the commits you want. In this example, we used a range starting from (and including) `f1b62817d9` through commit `98d2bba6d0`. The `^` denotes that the specified commit is included, otherwise the commit AFTER the specified commit is the first commit included. We could also cherry-pick a single commit with `git cherry-pick f1b62817d9`.

After all that, you can push your branch. You can also merge your feature branch into your desired PR branch locally (don’t commit it!) if you want to ensure that you don’t have any merge conflicts. The easier your PR is to merge, the better.
