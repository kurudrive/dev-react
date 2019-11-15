Reactの学習・テスト用リポジトリです

## 作業前の確認事項

### 事前にインストールが必要なもの

#### node

nodebrew で使えるバージョンの確認

```
$ nodebrew ls
```

使いたいバージョンを選ぶ
このリポジトリでは v10系

```
// Mac で nodebrew使用の時
$ nodebrew use v10.15.0
// Win で nvm-windows使用の時
$ nvm use v10.17.0
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

なにかエラーが出たらパッケージがなかったりするかもしれないのでとりあえず	 npm install
この時親ではなく dev-app のように子のプロジェクトで実行する
```
$ npm install --save-dev
```

## ウェブサイトに埋め込み

該当のアプリをターミナルで開き

```
npm run build
```

で build ディレクトリが出来るので、その中身をウェブサーバー公開ルートに入れれば使える

---

## 次回

https://qiita.com/rspmharada7645/items/dd794478e593c3d7d3f2
