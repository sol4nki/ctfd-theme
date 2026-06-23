# Requirements 

> [!IMPORTANT]
> I asked AI to write this, so it might have some issues just open an pull request if you feel like you can write a better more personalized one

Before you start working, make sure you have the following installed:

## Core Requirements

### 1. Git

Used to clone repositories and manage theme updates.

* **Check:**

```bash
git --version
```

---

### 2. Docker + Docker Compose

Used to run the CTFd backend.

* Required for running the full CTFd stack.

* **Check:**

```bash
docker --version
docker compose version
```

---

### 3. Node.js (LTS recommended)

Required for theme asset building (Vite).

* Recommended: Node.js **18+ or 20+**

* **Check:**

```bash
node -v
npm -v
```

---

### 4. Yarn (Classic)

Used for dependency management in the theme build system.

* **Check:**

```bash
yarn -v
```

---

# Installation Guide (by OS)

---

# :penguin: Linux (Ubuntu / Debian / Arch)

## Install Git

```bash
sudo apt update
sudo apt install git -y
```

Arch:

```bash
sudo pacman -S git
```

---

## Install Docker

Ubuntu/Debian:

```bash
sudo apt install docker.io docker-compose-plugin -y
sudo systemctl enable --now docker
```

Arch:

```bash
sudo pacman -S docker docker-compose
sudo systemctl enable --now docker
```

Add user to docker group:

```bash
sudo usermod -aG docker $USER
newgrp docker
```

---

## Install Node.js (via NVM recommended)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Reload shell:

```bash
source ~/.bashrc
```

Install Node LTS:

```bash
nvm install --lts
nvm use --lts
```

---

## Install Yarn

```bash
npm install -g yarn
```

---

# :apple: macOS

## Install Homebrew (if not installed)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

---

## Install dependencies

```bash
brew install git docker node yarn
```

Start Docker Desktop manually after installing.

---

# :window: Windows

## Recommended: Use WSL2 (best experience)

Inside WSL (Ubuntu):

Follow Linux steps above.

---

## OR Native Windows setup

### Install tools:

* Git: [https://git-scm.com/download/win](https://git-scm.com/download/win)
* Docker Desktop: [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)
* Node.js LTS: [https://nodejs.org](https://nodejs.org)
* Yarn:

```bash
npm install -g yarn
```

---

# :wrench: Verify Everything

Run:

```bash
git --version
docker --version
node -v
yarn -v
```

If all commands return versions → you're good to go.

---

# :rocket: After Setup

You can now:

```bash
git clone https://github.com/CTFd/CTFd.git
cd CTFd
docker compose up
```

Then install your theme inside:

```
CTFd/themes/
```

