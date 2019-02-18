---
title: Completing Pull Requests Locally from Bitbucket Using Git
cover: 'https://images.unsplash.com/photo-1475706398693-8250350bc704?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
date: '2017-01-22'
description: Quick tutorial on various methods to checkout and merge pull requests from Bitbucket using Git.
slug: 'blog/007-completing-prs-locally-from-bitbucket'
category: 'tutorial'
tags:
  - git
  - workflow
---

For this example, we’ll use the repository ‘cuttle-repo’ from Cuttlesoft that has been forked by user emilyemorehouse.

The repository URL of the base repository is therefore `https://bitbucket.org/cuttlesoft/cuttle-repo` and the forked repository is `https://bitbucket.org/emilyemorehouse/cuttle-repo`.

We should first realize that pull requests are essentially requests to merge an ENTIRE branch in (one of the reasons why branching standards are incredibly important while using source control). If commits are made on a branch which already has a PR open, the new commits are also included in the existing PR. Also, if a PR is accepted, a new PR on that same branch will pull in ALL commits from that branch, not just the existing ones.

Let’s begin.

## STANDARD FETCH/TEST/MERGE:

### ACQUIRE NEW CHANGES:

1. First, ensure that you don’t have any outstanding changes:
   `$ git status`

2. Next, fetch the changes from the desired branch. Typically, this will be from a feature branch, as we encourage users to utilize our standard branching structure. You can use the HTTPS url or SSH.
   Using SSH:
   `$ git fetch git@bitbucket.org:emilyemorehouse/cuttle-repo.git feature/new-thing`
   Using HTTPS:
   `$ git fetch https://bitbucket.org/emilyemorehouse/cuttle-repo feature/new-thing`

### VIEW AND TEST FETCHED CHANGES:

3. To view the changes that you wish to merge, run the following command:
   `$ git diff master FETCH_HEAD`
   Here, master is our local branch we want to check against (it may be common to merge into a feature branch of the base repository if multiple users are working on a single feature, and the feature is not yet completed but is ready to be merged up). FETCH_HEAD will contain all changes that have been fetched from the forked repository, though they are not yet available to us to actually run (i.e. `$ git status` will not display these changes yet).

4. To run the code as is (prior to merging), run:
   `$ git checkout FETCH_HEAD`.
   This will create a detached HEAD state, which will allow you to test the new changes. `$ git log` will now contain the fetched commits.

### MERGE UP THE PULL REQUEST / BRANCH

5. Checkout a new branch to hold your changes. This branch should not be pushed, but should follow the naming convention `PR/new-thing`:
   `$ git checkout -b PR/new-thing`.

6. Now that your changes are on a branch, you can merge this into your desired branch (e.g. `master` or `feature/new-thing`). In most cases, we want to squash the changes into a single commit, though this flag can be omitted. Run:

```
$ git checkout master
$ git merge --squash PR/new-thing
```

TEST BEFORE COMMITTING! Once you’re sure nothing breaks (test it manually, check for console errors, run the test suite), then you can commit:

```
$ git commit
$ git push
```

_Alt 5 & 6)_ Steps 4 and 5 can be replaced, as it is not necessary to checkout changes to a branch before merging. Alternatively, to merge into `master` you use the following commands:

```
$ git checkout master
$ git merge --squash FETCH_HEAD
```

TEST TEST TEST, then:

```
$ git commit
$ git push
```

## MAKING CHANGES TO A PULL REQUEST BEFORE MERGING

Mistakes happen. Whether it’s a new error that’s discovered, missing documentation, or an API key that’s been committed, you can fix these before completing your merge.

### METHOD 1: Persist changes to the forked repository

You should use this method if there is an error that you wish to change immediately.

Fetch and checkout the new commits in the same way. Run:
Using SSH:
`$ git fetch git@bitbucket.org:emilyemorehouse/cuttle-repo.git feature/new-thing`
Using HTTPS:
`$ git fetch https://bitbucket.org/emilyemorehouse/cuttle-repo feature/new-thing`

Then:
`$ git checkout FETCH_HEAD`.

Make any changes then commit and note the commit ID:

```
$ git commit -m "[#XXXXXX] fixed the thing"
[detached HEAD 8bb13a2] [#XXXXXX] fixed the thing
 1 file changed, 1 insertion(+)
```

```
$ git checkout master
$ git merge 8bb13a2
$ git push
```

### METHOD 2: Make the changes mid-merge

You can also simply make changes during Step 6 while testing your merge. Changes made here will not have an explicit commit and will not be included in the automatic merge commit message though, so it’s harder to track down if you ever need to track down changes in your commit logs.
