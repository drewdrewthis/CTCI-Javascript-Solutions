'use strict';

// 8.3 Design a musicaljukebox using object-oriented principles.

function Song(title, duration) {
	this.title = title;
	this.duration = duration;
}

function CD(title,artist,songs) {
	this.title = title;
	this.artist = artist;
	this.songs = songs;
}

function JukeBox() {
	var self = this;

	this.cds = [];
	this.credit = 0;
	this.playList = [];
	this.cost_of_song = 0.25;
	this.displayInfo = {
		album: "",
		artist: "",
		song_title: "",
		update: function(song) {
			this.album = song.album.title;
			this.artist = song.album.artist;
			this.song_title = song.title;
			self.printDisplay();
		},
		clear: function() {
			this.album = "";
			this.artist = "";
			this.song_title = "";
			console.log("Please select next song.");
		}
	}
	this.current_song = undefined;

	this.printDisplay = function() {
		console.log("------------------");
		console.log("Album: " + self.displayInfo.album);
		console.log("Artist: " + self.displayInfo.artist);
		console.log("Song: " + self.displayInfo.song_title);
		console.log("------------------");
	}

	this.addCD = function(CD) {
		self.cds.push(CD);
	}

	this.extendSong = function(album, song) {
		song.album = album;
		song.startSong = function() {
			console.log("Starting " + song.title + "..");
			console.time(".." + song.title + " finished");
			setTimeout(self.playNextSong, song.duration + 300); // 300 millisecond buffer between songs
		}
		return song;
	}

	this.addCredit = function(amt) {
		self.credit += amt;
		console.log('$' + amt + ' added.');
		console.log('Credit: ' + self.credit);
	}

	this.addSong = function(cd_index, song_index) {
		if(self.credit === 0) return console.log("Not enough credit");
		let album = self.cds[cd_index];
		let song = cd.songs[song_index];
		self.credit -= 0.25;
		song = this.extendSong(album, song);
		self.playList.push(song);
		console.log("Song added");
		if(!self.current_song) return self.playNextSong();
	}

	this.playNextSong = function() {
		let next = self.playList.shift();
		if(next) {
			if(self.current_song) console.timeEnd(".." + self.current_song.title + " finished");
			self.current_song = next;
			self.displayInfo.update(next);
			next.startSong();
		}
		else {
			self.displayInfo.clear();
			if(self.current_song) console.timeEnd(".." + self.current_song.title + " finished");
		}
		
	}
}

var juke = new JukeBox();
var song1 = new Song("Jammin\'", 1000);
var song2 = new Song("Killer", 890);
var song3 = new Song("Just Once", 1100);
var cd = new CD('Greatest Hits', 'DeadEyes', [song1,song2,song3]);
juke.addCD(cd);
juke.addCredit(0.50);
juke.addSong(0,2);
juke.addSong(0,0);
juke.addSong(0,1);
juke.addCredit(0.25);
juke.addSong(0,1);
