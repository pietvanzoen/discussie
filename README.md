Discussie
===

A minimal diqus alternative.

## Server

### Models

#### Comment
* `id` UUID
* `url` URL - related url for comment
* `comment` String
* `name` String
* `createdAt` Date - readonly
* `parentId` UUID - id of parent comment
* `wibble` String - honeypot string

#### Upvote
* `id` UUID
* `createdAt` Date
* `url` URL - related url for upvote
* `wibble` String - honeypot string

### API

### `GET /upvotes?url=<url-for-upvotes>`
* returns a count of upvotes for given url
* returns date of last upvote

### `POST /upvotes`
* creates an upvote
* use cookie to restrict upvoting?

### `GET /comments?url=<url-for-upvotes>`
* returns a count of comments for given url
* returns list of comments
* returns rendered markdown

### `POST /comments`
* creates a comment

### `DELETE /comments`
* delete a comment
* would require auth layer

## Roadmap

### v0.1

* upvoting

### v0.2
* single threaded comments
* akismet integration

### v0.3
* comments on comments - multi thread comments

### v0.4
* delete comments
* basic auth or other auth method for protected endpoints

### v0.x
* admin panel
