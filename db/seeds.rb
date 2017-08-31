# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Podcast.delete_all


Podcast.create!(title:"Planet Money",logo_url:"http://is3.mzstatic.com/image/thumb/Music62/v4/9c/26/62/9c266213-2a31-e6bd-ced0-3f88bffa52c7/source/600x600bb.jpg",feed_url:"https://www.npr.org/rss/podcast.php?id=510289",itunes_id:290783428)
Podcast.create!(title:"Radiolab",logo_url:"http://is1.mzstatic.com/image/thumb/Music127/v4/e2/e0/ea/e2e0ead8-a98b-788d-c384-cc4cdc01aaaf/source/600x600bb.jpg",feed_url:"http://feeds.wnyc.org/radiolab",itunes_id:152249110)
Podcast.create!(title:"Another Round",logo_url:"http://is4.mzstatic.com/image/thumb/Music62/v4/98/55/b9/9855b97d-92ab-de89-efa7-7d7af8b6eecc/source/600x600bb.jpg",feed_url:"http://feeds.feedburner.com/AnotherRoundPodcast",itunes_id:977676980)
Podcast.create!(title:"Freakonomics Radio",logo_url:"http://is4.mzstatic.com/image/thumb/Music117/v4/51/1c/59/511c590b-522a-fba6-a414-288254c56f1a/source/600x600bb.jpg",feed_url:"http://feeds.feedburner.com/freakonomicsradio",itunes_id:354668519)
Podcast.create!(title:"You Made It Weird with Pete Holmes",logo_url:"http://is2.mzstatic.com/image/thumb/Music71/v4/53/f9/8d/53f98d9e-dc6a-1c7c-a1de-a3ac57a4e435/source/600x600bb.jpg",feed_url:"http://feeds.feedburner.com/YouMadeItWeird",itunes_id:475878118)
Podcast.create!(title:"StartUp Podcast",logo_url:"http://is5.mzstatic.com/image/thumb/Music71/v4/02/a1/a1/02a1a1d9-01c0-ec58-af8f-f230f5f1e181/source/600x600bb.jpg",feed_url:"http://feeds.hearstartup.com/hearstartup",itunes_id:913805339)
Podcast.create!(title:"The Pitch",logo_url:"http://is3.mzstatic.com/image/thumb/Music118/v4/86/1c/a0/861ca00d-f550-6f86-fd34-63b98454dc86/source/600x600bb.jpg",feed_url:"https://feeds.megaphone.fm/thepitch",itunes_id:1008577710)
Podcast.create!(title:"Masters of Scale with Reid Hoffman",logo_url:"http://is1.mzstatic.com/image/thumb/Music127/v4/f2/7d/78/f27d78b1-fcfe-7f30-49c8-3c9e95d6170e/source/600x600bb.jpg",feed_url:"https://rss.art19.com/masters-of-scale",itunes_id:1227971746)
Podcast.create!(title:"The Brian Lehrer Show",logo_url:"http://is2.mzstatic.com/image/thumb/Music111/v4/87/b5/80/87b58079-61fc-d4b5-647b-079938f0d8ec/source/600x600bb.jpg",feed_url:"http://feeds.wnyc.org/wnyc_bl",itunes_id:73331636)
Podcast.create!(title:"StarTalk Radio",logo_url:"http://is2.mzstatic.com/image/thumb/Music62/v4/8e/0a/70/8e0a7014-9ccc-b532-5eb7-2b803d1a571a/source/600x600bb.jpg",feed_url:"http://feeds.soundcloud.com/users/soundcloud:users:38128127/sounds.rss",itunes_id:325404506)
Podcast.create!(title:"The Joe Rogan Experience",logo_url:"http://is4.mzstatic.com/image/thumb/Music127/v4/d0/e6/5f/d0e65f81-c2cf-7f59-38e4-6abcfab7e38a/source/600x600bb.jpg",feed_url:"http://joeroganexp.joerogan.libsynpro.com/rss",itunes_id:360084272)
Podcast.create!(title:"This American Life",logo_url:"http://is5.mzstatic.com/image/thumb/Music71/v4/03/3c/f1/033cf19b-a70e-108f-2d77-82c5b8c8cde0/source/600x600bb.jpg",feed_url:"http://feed.thisamericanlife.org/talpodcast",itunes_id:201671138)
Podcast.create!(title:"Fresh Air",logo_url:"http://is3.mzstatic.com/image/thumb/Music127/v4/66/02/b7/6602b7c8-031b-bd99-7ec3-fddeec99d3ed/source/600x600bb.jpg",feed_url:"https://www.npr.org/rss/podcast.php?id=381444908",itunes_id:214089682)
Podcast.create!(title:"WTF with Marc Maron Podcast",logo_url:"http://is4.mzstatic.com/image/thumb/Music71/v4/2b/fd/92/2bfd9226-b330-491a-86cc-02624d253901/source/600x600bb.jpg",feed_url:"http://wtfpod.libsyn.com/rss",itunes_id:329875043)
Podcast.create!(title:"Hidden Brain",logo_url:"http://is4.mzstatic.com/image/thumb/Music127/v4/66/3a/63/663a63dd-d557-5a2f-863a-541a121f42df/source/600x600bb.jpg",feed_url:"https://www.npr.org/rss/podcast.php?id=510308",itunes_id:1028908750)
Podcast.create!(title:"2 Dope Queens",logo_url:"http://is4.mzstatic.com/image/thumb/Music117/v4/39/02/9b/39029b19-edba-f441-0c8d-0fbb9da75896/source/600x600bb.jpg",feed_url:"http://feeds.wnyc.org/2DopeQueens",itunes_id:1097193327)
Podcast.create!(title:"Slate's Political Gabfest",logo_url:"http://is5.mzstatic.com/image/thumb/Music117/v4/bb/52/f9/bb52f980-fab4-173a-4ee3-5a3ce0ff6428/source/600x600bb.jpg",feed_url:"http://feeds.feedburner.com/SlatePoliticalGabfest",itunes_id:158004641)
Podcast.create!(title:"Reply All",logo_url:"http://is2.mzstatic.com/image/thumb/Music111/v4/6c/9e/5f/6c9e5f7e-aed2-b477-516d-af319c09aa49/source/600x600bb.jpg",feed_url:"http://feeds.gimletmedia.com/hearreplyall",itunes_id:941907967)
Podcast.create!(title:"Slate Money",logo_url:"http://is4.mzstatic.com/image/thumb/Music2/v4/f0/69/d3/f069d3c5-2475-ae8a-2b4d-48b99e12145a/source/600x600bb.jpg",feed_url:"http://feeds.feedburner.com/SlateMoney",itunes_id:876523888)
Podcast.create!(title:"Slate's Culture Gabfest",logo_url:"http://is2.mzstatic.com/image/thumb/Music128/v4/9e/5d/d7/9e5dd71f-fbfe-d15f-b653-0a0a8059b9aa/source/600x600bb.jpg",feed_url:"http://feeds.feedburner.com/SlateCultureGabfest",itunes_id:279188498)
Podcast.create!(title:"CodeNewbie",logo_url:"http://is2.mzstatic.com/image/thumb/Music71/v4/86/2c/3d/862c3d51-3c40-7f19-98fe-5952c69709be/source/600x600bb.jpg",feed_url:"http://feeds.codenewbie.org/cnpodcast.xml",itunes_id:919219256)
Podcast.create!(title:"Learn to Code With Me",logo_url:"http://is2.mzstatic.com/image/thumb/Music71/v4/11/f0/8f/11f08f6a-a6da-5782-4443-352126c4d15f/source/600x600bb.jpg",feed_url:"http://learntocodewithme.libsyn.com/rss",itunes_id:1106620664)
Podcast.create!(title:"Dan Carlin's Hardcore History",logo_url:"http://is4.mzstatic.com/image/thumb/Music71/v4/09/5c/79/095c79d2-17dc-eb92-3f50-ce8b00fc2f4d/source/600x600bb.jpg",feed_url:"http://feeds.feedburner.com/dancarlin/history?format=xml",itunes_id:173001861)
Podcast.create!(title:"Here's The Thing with Alec Baldwin",logo_url:"http://is4.mzstatic.com/image/thumb/Music122/v4/74/b7/e2/74b7e253-0704-a10e-cded-294fcd3e028d/source/600x600bb.jpg",feed_url:"http://feeds.feedburner.com/wnycheresthething",itunes_id:472939437)

Episode.delete_all

def get_five_episodes(podcast)
  response = RestClient.get(podcast.feed_url)
  feed = Feedjira::Feed.parse_with(Feedjira::Parser::ITunesRSS, response)
  episodes = feed.entries
  five_most_recent_episodes = []
  episodes.each_with_index do |episode, i|
    ep = Episode.new(
    podcast_id: podcast.id,
    title: episode.title,
    summary: episode.summary,
    pub_date: episode.published,
    audio_url: episode.enclosure_url,
    duration: episode.itunes_duration,
    audio_type: episode.enclosure_type,
    image_url: podcast.logo_url
    )
    if ep.save
      five_most_recent_episodes << ep
    else
      errors = ep.errors.full_messages
      errors
    end
    break if i == 5
  end
  five_most_recent_episodes
end
Podcast.all.each do |podcast|
  get_five_episodes(podcast)
end
