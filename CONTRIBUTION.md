# DCN Contribution Guide

Whether you're new to GitHub or an experienced developer, we welcome your contribution. This project gives contributors hands-on experience with open source collaboration and basic web development.

Join the conversation in [our Discord server](https://discord.gg/WZubTZsxKG) before contributing. Let us know what you want to add or fix.

---

## Adding yourself as a member

The only file you need to edit is **`members/members.js`**.

Find the `// add here` comment near the bottom of the `members` array and add your entry **above** it:

```js
// your-github-username
{
  fullName: 'Your Full Name',
  discordUsername: 'yourdiscord#1234',
  about: 'One line about yourself',
  links: {
    github: 'your-github-username',
    twitter: 'your-twitter-handle',   // optional
    facebook: 'your-facebook-handle', // optional
  }
},
// add here
```

**Notes:**
- `fullName` — your real name or preferred display name
- `discordUsername` — your Discord handle
- `about` — keep it short, one sentence
- `links.github` — required (used for your profile avatar)
- `links.twitter` and `links.facebook` — optional, omit if not applicable
- If your GitHub avatar is missing, the site auto-generates an initials avatar

Your card will automatically appear on both the **Members** page and the **homepage** preview once merged.

---

## Forking and cloning

You'll need a fork of the repository to submit changes.

1. [Fork the repo](https://help.github.com/articles/fork-a-repo/) on GitHub
2. Clone your fork locally:
   ```bash
   git clone git@github.com:YOUR-USERNAME/dev-circle-np.github.io.git
   cd dev-circle-np.github.io
   ```
3. Add the upstream remote:
   ```bash
   git remote add upstream https://github.com/dev-circle-np/dev-circle-np.github.io.git
   ```

You should now have:
- `origin` → your fork (`github.com/YOUR-USERNAME/dev-circle-np.github.io`)
- `upstream` → the original DCN repo

---

## Working with a local copy

Before making changes, sync your fork with upstream:

1. Make sure you're on master:
   ```bash
   git checkout master
   git status
   ```
2. Sync with upstream:
   ```bash
   git pull --rebase upstream master
   ```
3. Create a new branch:
   ```bash
   git checkout -B your-branch-name
   ```
   Use a descriptive name e.g. `add-nabin-as-member` or `fix-navbar-mobile`.

4. Make your changes, then test locally by opening `index.html` in a browser or running:
   ```bash
   python -m http.server 8080
   ```
   Visit `http://localhost:8080` to preview.

---

## Pushing changes to your fork

```bash
git status                          # review changed files
git add members/members.js          # stage only what you changed
git commit -m "add your-name as member"
git push -u origin your-branch-name
```

---

## Submitting a pull request

1. Go to the [DCN repository on GitHub](https://github.com/dev-circle-np/dev-circle-np.github.io)
2. Click **"New pull request"** → **"compare across forks"**
3. Set:
   - **base:** `dev-circle-np/dev-circle-np.github.io` → `master`
   - **compare:** `YOUR-USERNAME/dev-circle-np.github.io` → `your-branch-name`
4. Title your PR clearly e.g. `add Nabin Sademba as member`
5. If fixing an issue add `closes #123` in the description
6. Submit — maintainers will review and merge

If changes are requested, push additional commits to the same branch and the PR updates automatically.
