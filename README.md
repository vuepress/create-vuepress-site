# create-vuepress-site

Scaffolding a VuePress project

## Getting Started

### Run generator

In the desired folder, run the following command to start the VuePress site generator:

```shell
npx create-vuepress-site
# yarn create vuepress-site
```

This will create a scaffolded documentation site in the `docs` directory that is enclosed from the rest of the folder.

### Setup local environment

```shell
# Navigate into newly scaffolded docs directory
cd docs

# Install dependencies
npm install
# yarn install

# Start local dev server
npm run dev
```

By default, you should now see your scaffolded VuePress docs site at https://localhost:8080!

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Hat Tip

`create-vuepress-site` exists due to the previous work of:

- [create-vuepress](https://github.com/vuepressjs/create-vuepress)

- [create-umi](https://github.com/umijs/create-umi) (Direct reuse of scaffolding functions of the library.)
