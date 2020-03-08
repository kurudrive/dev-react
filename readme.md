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
$ nodebrew use v12.14.0
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

#### create-react-app”

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

なにかエラーが出たらパッケージがなかったりするかもしれないのでとりあえず npm install
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

## Redux について ( react-redux )

Rexuxとは

* コンポーネントの階層が大きくなった時に容易に状態を共有する

Reduxのパッケージのインストールが必要なのでreactの各プロジェクトのディレクトリに移動してインストールする

```
yarn add redux react-redux
```

actions : アプリケーションで何が起きたかのデータ
reducers : アクションが発生した時にアクションに組み込まれたtypeに対して状態（state）をどう変化させるのか
stateが更新されると自動的に再描画される
stateはstoreが管理する
Reducerをもとにstoreを作る
すべてのコンポーネントで store を使えるようにする


---

### APIの仕様をcurlで確認する

ターミナルで以下のようにAPIサーバーに対してリクエストを送ると応答する

#### 全件取得
```
curl --request GET --url \
'https://udemy-utils.herokuapp.com/api/v1/events?token=token123'
```

#### １番だけ取得してみる
```
curl --request GET --url \
'https://udemy-utils.herokuapp.com/api/v1/events/1?token=token123'
```

#### データを作成する POST

POST で json のデータを送る
```
curl --request POST \
--url 'https://udemy-utils.herokuapp.com/api/v1/events?token=token123' \
--header 'Content-Type: application/json' \
--data '{
	"title": "event11",
	"body": "body for event 11"
}'
```

#### データを更新する PUT
```
curl --request PUT \
--url 'https://udemy-utils.herokuapp.com/api/v1/events/1?token=token123' \
--header 'Content-Type: application/json' \
--data '{
	"title": "変更したタイトル",
	"body": "変更した内容"
}'
```

#### データを削除する DELETE
```
curl --request DELETE \
--url 'https://udemy-utils.herokuapp.com/api/v1/events/1?token=token123' \
--header 'Content-Type: application/json'
```

---

# section5


```
# Reduxインストール
yarn add redux react-redux

# サーバーとのhttp通信を行うライブラリをプロジェクト内でインストール
yarn add axios

# Reduxのアクションクリエイターの非同期処理をするライブラリ
yarn add redux-thunk
```

https://github.com/reduxjs/redux-thunk

redux-thunkを使うと、アクションクリエイターがアクションの代わりに関数を返す事が出来るようになる
