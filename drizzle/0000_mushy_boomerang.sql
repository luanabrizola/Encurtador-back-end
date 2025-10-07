CREATE TABLE "links" (
	"id" uuid PRIMARY KEY NOT NULL,
	"legenda" text NOT NULL,
	"url" text NOT NULL,
	"codigo" varchar(10) NOT NULL,
	CONSTRAINT "links_url_unique" UNIQUE("url"),
	CONSTRAINT "links_codigo_unique" UNIQUE("codigo")
);
