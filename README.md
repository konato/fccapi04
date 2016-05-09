#Konato FreeCodeCamp Images Search Microservice
Should replicate the following Images Search microservice https://cryptic-ridge-9197.herokuapp.com/api/imagesearch
This use Free Google Custom Search API, results are limited to the first 100.

##User stories:

 I can search for images like this: 
  https://cryptic-ridge-9197.herokuapp.com/api/imagesearch/lolcats%20funny?offset=10 

 I can browse recent search queries like this: https://cryptic-ridge-9197.herokuapp.com/api/latest/imagesearch/. 

 *Bonus* Search queries are saved in a database.
 
##Example usage:
https://freecodecampapi04-stephaner.c9users.io/lolcats%20funny?offset=10
https://freecodecampapi04-stephaner.c9users.io/latest/imagesearch/



##Example outputs:

Search lolcats funny:
[{"url":"https://i.ytimg.com/vi/tRzXptpC3_U/hqdefault.jpg","snippet":"funny lolcats and loldogs","thumbnail":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS_dKvb6pMA0bod00g0v1Bk3YakSY7H4HYwpu268AqUK8pPiSdlUh9pEnYh","context":"https://www.youtube.com/watch?v=tRzXptpC3_U"},{"url":"http://www.wallpapersxl.com/wallpapers/1440x900/flamenco/169257/flamenco-lolcats-funny-169257.jpg","snippet":"Lolcats Funny 1440x900","thumbnail":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcStyjj01vszOWOaJvzp6bpgCeyeoKezI_AQ1jTZ-IiHkaQQIT-5WSnYgqg","context":"http://www.wallpapersxl.com/wallpaper/1440x900/flamenco-lolcats-funny-169257.html"},{"url":"http://data.whicdn.com/images/29198044/large.jpg","snippet":"include: cat and funny","thumbnail":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSioF9s2mb9NNZ3w8BZFsaehZB_8iKLcxiUQKvAJak6DagNdu2RzxOwL8A","context":"http://weheartit.com/entry/group/21973537"},{"url":"http://media3.popsugar-assets.com/files/upl0/1/15111/09_2008/lolcat-funny-picture-mario-cat/i/Geeky-Lolcats.jpg","snippet":"Image","thumbnail":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfE2eKFCaDtOtM4Y3WZHot6qMFrAMp72WKkH332PivJmCc_0MtTKaDCof","context":"http://www.popsugar.com/tech/Oh-Hai-Geekshooger-1073362"},{"url":"http://cdnstatic.visualizeus.com/thumbs/36/0b/funny,lolcat,cats,cat,lolcats,humor-360ba427d350494fb4e69b209a93a814_h.jpg","snippet":"Atelier Paul Gabor_232; funny-","thumbnail":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT3LYyfkNxQWcG6wmB6M2FgUZpMXbjxXhc-g4CJ18luXAvDBdBNrzXAZQ8","context":"http://vi.sualize.us/icanhascheezburger_files_wordpress_2008_06_funny_pictures_hug_moment_forever_love_lolcats_picture_n2v.html"},{"url":"https://s-media-cache-ak0.pinimg.com/564x/bc/32/f3/bc32f3896ebe6cfc48d489f5e7674d7a.jpg","snippet":"#lolcats funny cats: Crazy","thumbnail":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-E2_REo5pS35JFNxsvMQphUAc49ILjIc3LcgksfHnfTfHJTLT3UXN_I","context":"https://in.pinterest.com/pin/556546466425330016/"},{"url":"http://media1.popsugar-assets.com/files/upl0/1/15111/09_2008/lolcat-funny-picture-moderator1/i/Geeky-Lolcats.jpg","snippet":"Image","thumbnail":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUwykAqUdG-rJegc8i5qMg2cOuNy8pKJ-V2sbG7ZfkRwQlzhu4EqCeQyo","context":"http://www.popsugar.com/tech/Oh-Hai-Geekshooger-1073362"},{"url":"https://s-media-cache-ak0.pinimg.com/originals/89/2c/90/892c90969a5d52b1824b9ebd0c2449dd.jpg","snippet":"Pinterest | Funny Cat Pictures","thumbnail":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ8YRKAGggPLPTnIlT2F5z99C83h43ava1NS5pbXOjLBYWJstQsbepLsg","context":"https://www.pinterest.com/pin/526991593871488427/"},{"url":"http://cdnstatic.visualizeus.com/thumbs/dc/6f/nice,lolcats,adorable,funny,photography-dc6fe93426f22216891d73d34ce06cb6_h.jpg","snippet":"cloning: results may vary","thumbnail":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSqORdYUh-vyiS60u_Ucv8kPAMPXRAj3S_S6M9rmsNQpTb0Uh4KHQxwmDWq","context":"http://vi.sualize.us/cloning_results_may_vary_funny_nice_adorable_lolcats_picture_33b8.html"},{"url":"https://i.ytimg.com/vi/8nOsEEBrEuA/hqdefault.jpg","snippet":"LOLCats in All Fired Up lol","thumbnail":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQuWNpmeNmLlMNc0v32tK83j4eOrOPVS6M2kty-CVFzQTvbS9d9WdKfrg7E","context":"https://www.youtube.com/watch?v=8nOsEEBrEuA"}]

Recent Search Queries: 
[{"term":"lolcats funny", "offset": 10, "date":"2016-04-28T10:46:49.078Z"},{"term":"lolcats funny","offset": 0, "date":"2016-04-28T10:18:41.333Z"},{"term":"dragon funny","when":"2016-04-28T09:51:37.294Z"},{"term":"dragon funny","when":"2016-04-28T09:51:32.556Z"},{"term":"dragon funny","when":"2016-04-28T09:51:21.246Z"},{"term":"dragon funny","when":"2016-04-28T09:51:11.732Z"},{"term":"dragon funny","when":"2016-04-28T09:47:14.786Z"},{"term":"lolcats funny","when":"2016-04-28T09:47:04.891Z"},{"term":"lolcats funny","when":"2016-04-28T09:40:50.549Z"},{"term":"lolcats funny","when":"2016-04-28T09:40:28.573Z"}]