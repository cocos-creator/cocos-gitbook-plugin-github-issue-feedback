# gitbook-plugin-github-issue-feedback

GitHub issue feedback for gitbook.

[![gif](https://media.giphy.com/media/3o7btYpgJvLlhkJMfC/giphy.gif)](http://www.giphy.com/gifs/3o7btYpgJvLlhkJMfC)

## gitbook-plugin-github-issue-feedback-language

add language support by [natas](https://github.com/nantas/gitbook-plugin-github-issue-feedback)

## gitbook-plugin-github-issue-feedback-language-custom

when `body.offsetHeight * 9 >= body.offsetWidth * 12`, disable feedback button by [drelaptop](https://github.com/drelaptop/gitbook-plugin-github-issue-feedback), so as to didn't show button when user read on phone.

## Install

Install with [npm](https://www.npmjs.com/):

    npm install gitbook-plugin-github-issue-feedback

## Usage

You should set `repo` in your `book.json`.

`book.json`

- `repo`: `owner/name`

```json
{
    "gitbook": ">=3.0.0",
    "title": "Example",
    "plugins": [
        "github-issue-feedback"
    ],
    "pluginsConfig": {
        "github-issue-feedback": {
            "repo": "azu/gitbook-plugin-github-issue-feedback"
        }
    }
}
```

## Changelog

See [Releases page](https://github.com/azu/gitbook-plugin-github-issue-feedback/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/gitbook-plugin-github-issue-feedback/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)
- [github/nantas](https://github.com/nantas)
- [github/drelaptop](https://github.com/drelaptop)

## License

MIT © azu
