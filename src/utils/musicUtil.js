
export default {
    //Arr转List
    arrayAtYield: function* (arr) {
        var yieldList = arr;
        for (var i = 0; i < yieldList.length; i++) {
            yield yieldList[i];
        }
    },
    //更新歌曲基本信息(封面 & 歌名 & url & 加载动作)
    updateSongIndo(song) {
        this.myAudio.src = song.url;
        this.myAudio.load();

        let player = document.getElementById("musicPlayer");

        player.getElementsByClassName("logo")[0].children[0].src = song.picture;
        player.getElementsByClassName("logo")[0].children[0].style.marginTop = 0;
        player.getElementsByClassName("name")[0].innerHTML = song.title;
    },
    //小数转百分比
    toPercent(point) {
        var percent = Number(point * 100).toFixed(1);
        percent += "%";
        return percent;
    },
    //控制进度条
    changeSongProgress() {
        let musicInfo = this.musicInfo;
        let songPCT = musicInfo.currentTime / musicInfo.duration;
        document.getElementById("nowP").style.width = this.toPercent(songPCT);
    },
    //切歌点击事件
    skipSongClick() {
        if (!this.myAudio) {
            this.playClick();
        }
        this._pauseAudio(this.myAudio);
        this._skipSong(this.myAudio).then(theAudio => {
            this.playClick();
        });
    },
    //切歌
    _skipSong(myAudio) {
        console.log("切歌");
        return new Promise((resolve, reject) => {
            this.getSongInfo().then(song => {
                resolve(myAudio);
            });
        });
    },

    //获取歌单url
    getSongList(listId = 1) {
        return new Promise((resolve, reject) => {
            let url = "http://www.searl.top:8888/music/list";
            this.$axios.get(url).then(result => {
                resolve(result.data);
            });
        });
    },

    //获取歌单中的歌
    getSongInfo(type = 1) {
        return new Promise(async (resolve, reject) => {
            const ORDER_PLAYER = 1;
            const RANDOM_PLAYER = 2;
            if (this.songs.length == 0) {
                let list = await this.getSongList();
                if (list.length == 0) {
                    console.log("没歌错误");
                    reject("sql-no-song");
                } else {
                    this.songs = list;
                }
            }
            let song;
            switch (type) {
                case ORDER_PLAYER:
                    if (!this.songList) {
                        this.songList = this.arrayAtYield(this.songs);
                    }
                    if (!(this.musicInfo.playCount % this.songs.length)) {
                        this.songList = this.arrayAtYield(this.songs);
                        console.log(this.musicInfo.playCount, this.songs.length, this.musicInfo.playCount % this.songs.length)

                    }
                    console.log(this.songs);
                    song = this.songList.next().value;
                    break;
                case RANDOM_PLAYER:
                    break;
            }
            await this.updateSongIndo(song);
            this.musicInfo.playCount++;
            resolve(song);
        });
    },
    //创建audio对象
    createAudio(url) {
        console.log("创建新Audio对象");
        // let url='http://v2.api.dmzj.com/article/recommend/header.json';
        let that = this;

        let audio = document.createElement("AUDIO");

        audio.addEventListener("canplay", function () {
            //当浏览器可以播放音频/视频时
            that.musicInfo.duration = audio.duration;
        });
        audio.addEventListener("timeupdate", function () {
            //当目前的播放位置已更改时
            that.musicInfo.currentTime = audio.currentTime;
            that.changeSongProgress();
        });
        audio.addEventListener("ended", function () {
            //当目前的播放列表已结束时(播放结束)
            console.log("播放结束");
            that.skipSongClick();
        });
        return audio;
    },
    //播放暂停按钮点击事件
    async playClick() {
        if (!this.myAudio) {
            this.myAudio = this.createAudio();
            let data = await this.getSongInfo();
            // myAudio.src = data.url;
            // myAudio.load();
        }
        let myAudio = this.myAudio;
        myAudio = this._pauseAudio(myAudio);
        if (myAudio.paused) {
            this.musicInfo.paused = true;
        } else {
            this.musicInfo.paused = false;
        }
        this.myAudio = myAudio;
    },
    //暂停/播放歌曲
    _pauseAudio(myAudio) {
        if (myAudio.paused) {
            console.log("播放");
            myAudio.play();
        } else {
            console.log("暂停");
            myAudio.pause();
        }
        return myAudio;
    }
}