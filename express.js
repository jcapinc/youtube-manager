const express = require("express");
const app = express();
const dotenv = require("dotenv");
const axios = require("axios");

app.get('/',(req,res) => {
	res.send('Version 0');
});

app.get('/playlist/:id', (req,res) => {
	res.send(getPlaylist(req));
});
app.listen(3000, () => console.log("listening on 3000"));

function getPlaylist(request){
	var querystring = "?";
	querysti
	return axios.get('https://www.googleapis.com/youtube/v3/playlistItems/list'); 
}