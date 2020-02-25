# Recettes des collectivités territoriales

## Local deployment

First set `SQLITE_DB_PATH` to absolute path to sqlite database, then run

```
yarn install
now dev
```

## Production deployment

Add distant Postgresql database information with (see `./now.json` for details)

```
now secrets add {db-host,db-pwd,etc}
```

and then run

```
now
```

## Data

Initial data is stored under `./data/data.csv`.

For **development**, one turns it into an sqlite database with

```
csvs-to-sqlite data.csv departements.db -s ";"
```

For **production**, one can create a SQL dump with

```
sqlite3 departements.db .dump > departements.sql
```

which can then be stored on a SQL instance through

```
psql -h <host> --port <port> -d <databae_name> -U <username> -a -f departements.sql -W
```
