# Vite Class undefined issue

Install dependencies

```
yarn
```

Run dev (it works no issue)

```
yarn dev
```

Build and run (the built bundle does not work)

```
yarn build
yarn serve
```

The following error is occurring on the built script:

```
Uncaught TypeError: Class extends value undefined is not a constructor or null
    at account_multisig.js:48:41
    at requireAccount_multisig (account_multisig.js:453:2)
    at common-index.js:34:31
    at requireCommonIndex (common-index.js:53:136)
    at requireRpc_errors (rpc_errors.js:10:24)
    at json-rpc-provider.js:20:22
    at requireJsonRpcProvider (json-rpc-provider.js:356:27)
    at index.js:9:29
    at requireProviders (index.js:12:131)
    at requireAccount (account.js:10:21)
```
