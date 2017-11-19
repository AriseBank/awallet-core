## Download
[Latest Release](https://github.com/arisebank/awallet-core/releases)

## Features
* Available on ***Windows***, ***Linux*** (ubuntu/debian) and ***Macosx*** (signed)
* No wait to sync to the network: launch and use.
* view any account from its address (transactions, delegate status and votes)
* (soon) deposit ACO using altcoins or USD (via changer.com) - no registration needed
* label any account
* realtime currency value (updated every 5 min) in UsD, Euro, BTC, HKD, JPY, CNY, AuD, CanD, Pound and Rubble
* autoconnecting to a healthy aco network peer. If the peer is not good any more, automatically find a new one.
* send aco from/to any account.
* easily switch to different network, or private chains
* customize background
* isolated processes on Windows and Macosx to prevent from data sniffing or injection.
* Translations (thanks to the AriseCoin and ARK communities). Please help contributing

If you login to your account (with your passphrase)
* (soon) Withdraw to altcoins or USD (via changer.com) - no registration needed
* Organise your accounts with virtual folders (for instance savings, personnal etc...) so you don't pay any transfer fee
* Update your votes.
* Save your passphrases (unsecured so far, secured vault in the near future)

Second signature supported. Multisignature accounts not yet supported.

## Screenshots


## From AUR
For distros derived from Arch Linux the package is avaliable in AUR, just run:

```
yaourt -Sy awallet-core
```

## From code

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. Optionally switch to node 6.9.2, because this is currently developped with this version:
```
sudo npm install -g n
sudo n 6.9.2
```

Install from source:
```bash
# Clone this repository
git clone https://github.com/arisebank/awallet-core
# Go into the repository
cd awallet-core
# Install dependencies
npm install
```

* In some cases, [node-hid](https://github.com/node-hid/node-hid) doesn't provide pre-built binaries, so is necessary to install the [node-hid dependencies](https://github.com/node-hid/node-hid#compiling-from-source) to build them from source before running `npm install`.

Then start:
```bash
npm start
```

## Necessary to package from Mac OS X

```
brew tap Homebrew/bundle
brew bundle
```

## Contributing
Read [CONTRIBUTING.md](https://github.com/arisebank/awallet-core/blob/master/CONTRIBUTING.md) to learn about how to contribute to this project.

## Authors
- Jared Rice Sr. <jared@arisebank.com>

### License [MIT](LICENSE.md) copyright (c) 2017 AriseCoin Foundation, Inc., copyright (c) 2016 fx thoorens