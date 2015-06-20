sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
sudo apt-get update
sudo apt-get install mongodb-org -y
# Add latest data
cd /vagrant
mongorestore --db championgg --collection webchampionpages --drop db/championgg/webchampionpages.bson
mongorestore --db championgg --collection webchampionroles --drop db/championgg/webchampionroles.bson
mongorestore --db championgg --collection webmatchuppages --drop db/championgg/webmatchuppages.bson
mongorestore --db championgg --collection weboverallroledatas --drop db/championgg/weboverallroledatas.bson
mongorestore --db championgg --collection weboverallstats --drop db/championgg/weboverallstats.bson
mongorestore --db championgg --collection webhomepagesummaries --drop db/championgg/webhomepagesummaries.bson
mongorestore --db championgg --collection webstatisticspages --drop db/championgg/webstatisticspages.bson