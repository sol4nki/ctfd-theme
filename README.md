# d4rkc0de-theme

Custom theme file for h4ckc0n based on the "Rewritten version of the CTFd core theme to use Bootstrap 5, Alpine.js, and vite to improve upon the existing CTFd theme structure."

## Quick Setup (First Time Run)

### 1. Clone CTFd

```bash
git clone https://github.com/CTFd/CTFd.git
cd CTFd
```

### 2. Add the custom theme

Inside the `CTFd/themes` directory:

```bash
cd CTFd/themes
git clone https://github.com/sol4nki/ctfd-theme.git d4rkc0de-theme
```

or simply drop the repo inside `themes/` if you have already cloned the repo. whatever you feel comfortable with

---

### 3. Start CTFd using Docker

From the root of the CTFd repo:

```bash
docker compose up
```

wait for some time and youll have your site all working on https://localhost:8000

---

### 4. First Login

Open the site (https://localhost:8000 most prolly) in your browser and register/login with any random credentials.

> [!CAUTION] 
> Just make sure you remember the password you enter (learned the hard way :sob:).

---

### 5. Enable Theme

After logging in:

* Go to **Admin Panel**
* Open **Config**
* Scroll to **Themes**
* Select `d4rkc0de-theme`
* Save changes

---

### 6. Voila :))))))

Refresh the homepage and your custom theme should now be active.

You can now start tweaking and experimenting freely.


## Development Notes

This theme is based on CTFd’s core frontend structure and modernized using Vite for faster frontend builds.

### Key Stack

* Bootstrap 5
* Alpine.js
* Vite



## Todo

- alot.
