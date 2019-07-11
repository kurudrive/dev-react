Reactの学習・テスト用リポジトリです

## 作業前の確認事項

### 事前にインストールが必要なもの

#### node

nodebrew で使えるバージョンの確認

```
$ nodebrew ls
```

使いたいバージョンを選ぶ
このリポジトリでは v10.15.0

```
$ nodebrew use v10.15.0
```

#### yarn

yarmがインストールされているか確認

```
$ yarn --version
```

バージョンが古い場合は一度削除してアップデートする

```
$ npm uninstall yarn -g
$ npm install yarn -g
```

#### create-react-app

Global に create-react-app がインストールされてない場合は以下のコマンドでインストール

```
$ npm install -g create-react-app
```

---

## 新規でプロジェクトを作る

```
// create-react-app [プロジェクト名]
$ create-react-app helloworld
```

## 実行

該当のディレクトリに移動し、yarn start します

```
$ cd helloworld
$ yarn start
```

次回
https://qiita.com/rspmharada7645/items/dd794478e593c3d7d3f2
https://webkikaku.co.jp/blog/javascript/react-start/
