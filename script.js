document.addEventListener('DOMContentLoaded', () => {
    const characterInfo = {
        name: "Incineroar",
        category:"rushdown", description: "Incineroar is a powerful grappler with strong throws and revenge mechanics.",
        matchups: [
            { opponent: "Mario", category:"rushdown", description: "Ban tri-plats. Other than that, you should be <b>revenging</b> carelessly thrown <b>fireballs</b>, using <b>fair and nair to trade or wall</b>, and using <b>dariat</b> generously <b>to keep him off you</b> (but be careful if he starts whiff punishing it). Make sure to DI away from platforms to limit extensions.", image: "./img/characters/mario.png" },
            { opponent: "Donkey Kong", category:"bigboi", description: "You want to abuse DK’s biggest weakness, being the fact that he’s combo food. Press your advantage as hard as possible, and play around tricky down B movement with smart nairs out of shield. He really can’t land, get off ledge, or recover so once you call out one of his options you can carry it very far.", image: "./img/characters/donkeykong.png" },
            { opponent: "Link", category:"defensive", description: "Difficult Mu. Like normal, revenge carelessly thrown projectiles. Competing with nair and fair can be troublesome so cornering him and stuffing him out with lots of nairs and fairs can make it hard for him to regain any footing. Ledgeguard when possible and watch out for his few mixups off ledge, most of which can be defeated by shielding and punishing.", image: "./img/characters/link.png" },
            { opponent: "Samus", category:"defensive", description: "Playing around zoners is a common skill that you can apply to all types of characters. Incin’s horizontal movement is very bad but his jumps carry him fast and he falls quickly. Use jumps and the mixups that come from them to get in, just be sure not to throw yourself at the enemy. More ideas on how to combat projectiles are in #faq. Other than that, Samus likes to set up a rock, paper, scissors scenario where your respond to charge shot can be called out. Very tough to get around but acknowledge how she’s stopping your approaches and try to outplay that mind game.", image: "./img/characters/samus.png" },
            { opponent: "Yoshi", category:"trickster", description: "Yoshi’s aerials last a good while and travel a far distance while doing so, meaning it’s hard for Yoshi to pull away when you revenge them. Being generous with revenge is pretty good in this mu, as yoshi has difficulty taking it away. Then you can run large hitboxes through air space to the area around you and make it difficult for Yoshi to run you over. Just make sure to keep observing yoshi and answer his tools.", image: "./img/characters/yoshi.png" },
            { opponent: "Kirby", category:"trickster", description: "Force trades with the puff ball as much as you can. Like with Yoshi, nair is good at this. Since Kirby moves much slower through the air, though, you can fair to wall him out in the air and on the ground. Since they’ll probably play bait and punish on the ground, just make sure not to make poor commitments. Don’t let them take dariat. A lot of their stubby mix ups also lose to side b so running that move through their running space is potent.", image: "./img/characters/kirby.png" },
            { opponent: "Fox", category:"rushdown", description: "This mu is dariat central. Mash this move like crazy, as even if you get punished for it, it’s around a normal fox punish (unless you’re at kill %, when is which you can use shield generously). This is just another mu where every trade you get is excellent, and taking risks can pay off splendidly because the risk-reward is very skewed in your favor. You can eat some punishes.", image: "./img/characters/fox.png" },
            { opponent: "Pikachu", category:"rushdown", description: "Any thunder jolts that aren’t attended to by pika can be revenged. Dariat can also punish a lot of quick attacks if pika ends up near you after hitting you. Otherwise, just make sure you know all your recovery mixups and try to calculate risk-reward for strong kill moves often throughout a match. Once you take a lead, you’re in a much better position to turtle, space with fair, and compound said lead.", image: "./img/characters/pikachu.png" },
            { opponent: "Luigi", category:"rushdown", description: "Just don’t get grabbed. Platform camp, land on him with spaced nairs or punish commitments with nairs to start combos. Just completely focus on getting a lead and camping him if you can.", image: "./img/characters/luigi.png" },
            { opponent: "Ness", category:"defensive", description: "To say I dislike this matchup is an understatement. Rely on fair a lot to trade or beat shorter range options. Remember to di pk fire up and away. Also try to juggle ness hard, and make sure to edgeguard as much as possible. Revenging rocket gives you max revenge. If you were too close to stage when doing it, he will grab ledge, otherwise the revenge hitbox will force a tech out of him. If you can just hit him before the rocket though. Try to keep him at ledge.", image: "./img/characters/ness.png" },
            { opponent: "Captain Falcon", category:"rushdown", description: "Juggle him hard with up airs and compete with his hitboxes with your own, larger ones. Understand what setups to look out for and how to avoid them, and press him to ledge while controlling as much space as possible. Don’t fall for baits and especially don’t fumble against the stupid double jumps above your head. Just go up there and smack em out of the sky with up air. (I’m mentioning this because I feel it’s common for people to lose to those baits)", image: "./img/characters/captainfalcon.png" },
            { opponent: "Jigglypuff", category:"defensive", description: "This matchup is all about shielding and turtling. Punish any over commitment with an aerial out of shield, react to pound and parry>up smash it or revenge>fair it. You can also use revenge against any other aerial. Just control a bubble of space around Incineroar, force and win tons of trades with nair, and shield things. Take a lead and hold on to it.", image: "./img/characters/jigglypuff.png" },
            { opponent: "Peach/Daisy", category:"rushdown", description: "Controlling the air space close to you is important. Use up airs, fairs and nair often, and you can be generous with short hop side b’s. Like other light characters, trades are good and you have good survivability if you can avoid kill options like fair and bair. Her little movement baits aren’t too effective if you just run a massive hitbox (nair) through her space, forcing her to make broader motions. Don’t get dtilted or landing naired at low percents.", image: "./img/characters/peach.png" },
            { opponent: "Bowser", category:"bigboi", description: "Bowser has massive moves and great movement but each one of his moves is actually pretty committal on whiff. Use d tilt a lot to control the ground space and potentially force aerial approaches. Bowsers air approaches can be whiff punished or stuffed. Keep this up to control the pace of the match. Also while you’re juggling him, you can revenge dair or down b to keep things going if he tries to come down aggressively, so don’t be afraid to press upward.", image: "./img/characters/bowser.png" },
            { opponent: "Ice Climbers", category:"trickster", description: "Incin’s specials all do great jobs at separating the climbers. Make sure you grab the main one with side b so you don’t get f smashed out of it. If you land a normal grab, f throw and back throw have very powerful collateral hits so use them often. Ledge guarding is easy if they are forced to up b. Just wait until after the first one grabs the ledge, and then run off nair the vulnerable second one and it gimps them.", image: "./img/characters/iceclimbers.png" },
            { opponent: "Sheik", category:"rushdown", description: "Take every single trade you can get your hands on, and don’t be afraid to swing wildly. Your reward for any hit in this matchup is huge so tossing out something like an up smash to just instill fear and potentially net big reward is very beneficial. Once you have a lead, run with it.", image: "./img/characters/sheik.png" },
            { opponent: "Zelda", category:"defensive", description: "If you’re going to revenge the phantom, do a jump revenge to minimize potential punishes. If you can get good reward off these revenges, you may dissuade Zelda from tossing so many out. Respect the endlag on her normals and some smashes, and try to keep center stage from her.", image: "./img/characters/zelda.png" },
            { opponent: "Doctor Mario", category:"rushdown", description: "Play to outrange with fair and nair. Revenge stray pills and hit hard in return. Watch out for his recovery mixups and punish accordingly. Down throw > Tornado is extremely true on Incineroar, meaning getting grabbed at ledge is a death sentence. He’s terrible at approaching so a lead is valuable in this mu.", image: "./img/characters/doctormario.png" },
            { opponent: "Pichu", category:"rushdown", description: "Every single trade/win you get on pichu puts him much closer to death. Very scary on both sides, so make sure to try and instill lots of fear into the pichu so they are less likely to punish things or press advantage super hard. Thunder Jolt can be revenged if not being followed by pichu. Dariat is solid for getting him off you.", image: "./img/characters/pichu.png" },
            { opponent: "Falco", category:"rushdown", description: "You can punish up tilt on shield if you play things right, and just watch out for his multitude of combo starters. You both have pretty poor neutral so getting a lead is valuable to force him to approach. Mixup your disadvantage options and be aware you may be eating a lot of damage, but if he misses his kill confirm window, it’s going to be difficult to finish you off. Also DI his throws so the lasers don’t hit you at high percents.", image: "./img/characters/falco.png" },
            { opponent: "Marth/Lucina", category:"midrange", description: "Being juggled by these characters is terrible, but juggling and ledge trapping them is exceptionally good. Press your advantage, play smart midrange neutral until you find your openings. Pretty fundamental based.", image: "./img/characters/lucina.png" },
            { opponent: "Young Link", category:"defensive", description: "#faq has some general information on how to get through projectiles. Otherwise, you just want to struggle through his projectiles and take any hit you can get. Revenge can be potent for tipping those openings in your favor. At kill percents, focus on not getting hit by a stray projectile, fair, or down tilt.", image: "./img/characters/younglink.png" },
            { opponent: "Ganondorf", category:"bigboi", description: "Ganondorf has better neutral than Incineroar. His long range attacks and good burst options make it difficult to deal with him, and you cannot rely on trades. Getting past his nair is tough but his disadvantage is far worse than Incineroar’s so here you need to capitalize like crazy. Watch out for the spooky command grab, and take revenges off predictable landing aerials.", image: "./img/characters/ganondorf.png" },
            { opponent: "Mewtwo", category:"fundies", description: "Any hits you get are great because he’s a light big body, and stuffing out his space with big attacks can be good against Mewtwo. Getting zoned by shadow ball spam can be a pain, but just be patient and don’t get baited into dumb approaches. Be careful how you recover, and Mewtwo may try to catch you early with bair. Press his disadvantage because his aggressive options are either short ranged (nair) or slow and committal (dair), and his double jump is very committal.", image: "./img/characters/mewtwo.png" },
            { opponent: "Roy/Chrom", category:"rushdown", description: "Revenge is big in this matchup to halt their advantage state, and running side bs and hitboxes through their space can be very effective. They both get juggled pretty easily and can struggle to maintain their grip on Incineroar. Against Chrom up b, revenge and then gauge what you can do afterward. If they are close enough to combo into run-off fair, go for it and end the stock. Otherwise you must contend with the mixups of Chrom airdodging to ledge if he’s close enough or changing up b spacing. He has mixups but you are favored so just play smart and gauge when you can finish him off.", image: "./img/characters/roy.png" },
            { opponent: "Mr. Game and Watch (GnW)", category:"trickster", description: "He’s light so of course, you’ll want to take every hit you can get. Otherwise… kind of tough. If you can establish a lead and force him to approach, you’re in a good spot. Otherwise just focus on not getting frustrated, respect his options, and try to maintain stage after winning neutral.", image: "./img/characters/gnw.png" },
            { opponent: "Meta Knight", category:"trickster", description: "Like I’ve said many times before, trades are very solid. His sword is small so you can force them sometimes. Focus on avoiding grab and dash attack at low percents until you’re in the clear in terms of combo percents. If you’re getting laddered or bridged, mixup your di multiple times to increase chances of him messing up. Getting a lead and dealing with approaches while instilling fear is very good. Mixup your recovery.", image: "./img/characters/metaknight.png" },
            { opponent: "Pit/Dark Pit", category:"fundies", description: "Dealing with multihits on your shield can be frustrating. His nair is very punishable on shield, and you can punish crossups hard by shielding in reverse. Otherwise, running hitboxes through his space is good, and try not to get baited by the multiple jumps. They can also ledge cancel side b so I guess watch out for that.", image: "./img/characters/pit.png" },
            { opponent: "Zero Suit Samus", category:"rushdown", description: "What a nightmare. She gets a lot off her defensive play, but her callouts or longer callouts require some commitment in terms of aerial drift. Losing a lead and getting camped is disastrous, but being able to cover flip jump out of the corner when possible will go a long way. To do this, just try to aim a hitbox at the middle of her arc. Of course, this is a commitment meaning it can be somewhat of a guessing game. Otherwise, she’s light so any hits you do manage to get will be good for you, and don’t be afraid to play slow as well.", image: "./img/characters/zerosuitsamus.png" },
            { opponent: "Wario", category:"rushdown", description: "Since wario is a close range fighter, dariat and nair are exceedingly excellent in this matchup. Take your trades and try to out range with your generous hitboxes. Do not ever get falling up aired when he has waft up, so don’t make dumb commitments while he’s trying to bait them with movement. See through the haze of his movement and focus on what he’s actually going to do/trying to accomplish.", image: "./img/characters/wario.png" },
            { opponent: "Snake", category:"defensive", description: "Snake’s aerials are mostly geared for punishes, covering landings, or making callouts. Not too great in neutral. This means snake will get a lot off playing grounded (which is why they like platforms to move around). Side b is armored and can sweep through a snake holding shield with grenade, even on platforms. Make sure you know grenade timing well so you can revenge them on the way in, slowly force snake to the corner, and then use side b to cover remaining ground space to force a jump or other commitment from Snake, lest he eats a side b.", image: "./img/characters/snake.png" },
            { opponent: "Ike", category:"midrange", description: "Your anti-air game must be on point. Ike suffers a lot in disadvantage, so pressing him with up airs is very good. Up air and full hop nair are very solid at covering space, just try not to whiff them randomly. Covering his high side bs can be difficult but try to maintain the same height as Ike while he falls when charging, or begin to move from instage up toward the ledge as he falls lower. A well timed nair should trade with the move.", image: "./img/characters/ike.png" },
            { opponent: "Pokemon Trainer", category:"fundies", description: "Squirtle: Use large hitboxes to trade. Side b can bit their side b, but my preferred answer is to just revenge on reaction and combo into fair. Play around their short range combo starters. Ivysaur: Careful with revenge as ivy’s grab range is long and the leaves travel slow. Try to make your way in slowly and keep them at the edge or in a juggle. Forcing Ivy to approach by getting a lead or making them go around you at ledge is good. Charizard: A terrifying sight at high percents, and leads to some high steaks neutral. See if you can stuff high startup aerials, or just focus on not getting hit and try to push forward and take more stage until it's safer for you to toss out a move.", image: "./img/characters/pokemontrainer.png" },
            { opponent: "Diddy Kong", category:"rushdown", description: "His variety of movement mixups are difficult to deal with, so if you’re unsure just focus on holding center stage. A banana in hand is a threat like always, but see if you can bait out a premature toss. Diddys who aren’t that good yet may not be comfortable with zdrop aerials so you can try to force them to go for an aerial. Otherwise, it might be ok to just maintain your stage and move around in a small area to just see where things go next. Once you win neutral you can try and shake up the pace of the match to throw Diddy off.", image: "./img/characters/diddykong.png" },
            { opponent: "Lucas", category:"defensive", description: "Watch out for zair and other aggressive options off ledge. Either shield or jump over them to try and get a punish. Otherwise, just play to your range and recover low to avoid pk freeze. Pk thunder can be an issue so just try to tech or revenge it when possible. Don’t get overwhelmed by safe options, and realize he shouldn’t get too much off them.", image: "./img/characters/lucas.png" },
            { opponent: "Sonic", category:"defensive", description: "Your goal is to take a lead. Of course, that’s also Sonic's main goal. If you can snag revenges off spin dashes on reaction, or limit sonics stage space to where a side b can cover a lot of remaining stage, you can get some bigger damage. Any little hits like nair or bair can also do good at evening a game up. Sonic has to enter your threat bubble until he has a lead, so see if you can take advantage when he does.", image: "./img/characters/sonic.png" },
            { opponent: "Dedede", category:"defensive", description: "Up air goes crazy in this mu. Make sure to chase dedede up there with your lagless up airs to keep advantage and prevent him from mixing his landing on your shield. Revenging gordos is excellent, as it also sends them back to cover you. Get under or behind his inhales for big punishes. If he has inhale out, you can react to the inhale drop with a punish, or land on his head with a fair from a decent distance. Being at ledge is the worst but you can mixup things like revenge, up airs to hit gordo, up bs past ledge and then your usual ledge options. Keep an eye out for any commitments to find openings.", image: "./img/characters/dedede.png" },
            { opponent: "Olimar", category:"defensive", description: "Like other light characters, getting hits and getting a lead is very good. You can revenge pikmin while they’re on you, with all of them getting knocked off by the hitbox except for reds, who you could continue to revenge if you think it’s safe. Nair is very good for getting them off you as well. In general you just need to play careful around olimar’s high damage combo starters at early percents, and pay just as much attention to his pikmin lineup as he is to know how he might try to finish your stock.", image: "./img/characters/olimar.png" },
            { opponent: "Lucario", category:"fundies", description: "It goes without being said that you want to kill him as early as possible. Don’t be afraid to try for some cheese or high risk and high reward options because when he has low aura, his punishes are not very powerful. When his aura is high and he’s able to zone effectively, you run into a lot of trouble so focus on boxing and getting those kill options going.", image: "./img/characters/lucario.png" },
            { opponent: "Rob", category:"defensive", description: "Incin has revenge as a unique answer to a lot of predictable safe options, which rob showcases a lot of. Landing with nairs or tossing projectiles is robs specialty (so revenge these), while juggling rob super hard and killing him early is Incin’s specialty. Watch out for up airs and other moves to cover his recovery, and be aware of gyro setups. Getting suffocated by d tilts and nairs in disadvantage is tough, but you can make damage back very quickly.", image: "./img/characters/rob.png" },
            { opponent: "Toon Link", category:"defensive", description: "Not as bad as the other links for his zoning options tend to be a little less suffocating, but his kill power is something to watch out for. Bomb fair is the main thing to look out for, but some other options include up b, up air and back throw. #faq has information on how to approach vs projectiles which you can apply here. Weave your way in, try to get a lead and then focus on maintaining it by avoiding kill options. Take revenge where you can get it. Tink has very fast movement but he’s floaty and has poor landing options so you can press his disadvantage and revenge dair on reaction.", image: "./img/characters/toonlink.png" },
            { opponent: "Wolf", category:"rushdown", description: "Deal with laser with revenge. Wolf has to enter your threat bubble to get things going so you can compete with your large hitboxes and advantage state. He struggles to edgeguard you but you can ledgeguard Wolf very well. Side b loses to any lingering hit so don’t be too scared of it, and both his recovery options can also be revenged. The mu is pretty fundamental based.", image: "./img/characters/wolf.png" },
            { opponent: "Villager", category:"defensive", description: "Classic grappler vs zoner mu. Revenge the pellets from slingshots whenever you can, same with lloyd rocket. Be careful not to jump too much or it’ll get called you. You can recover around bowling ball well as long as you don’t line yourself up right under the stage. Everytime you get in, you can get really big damage. Villager’s grab is slow and damage is poor so it’s difficult for them to shake off your revenge. Be patient when ledgetrapping to not take unnecessary damage, and be ready to hard punish unsafe lloyds or revenge slingshots. Remember lloyd doesn’t have a hitbox until it starts moving.", image: "./img/characters/villager.png" },
            { opponent: "Mega Man", category:"defensive", description: "This mu can be played kinda similar to villager, but you need to respect different options. Projectiles can be tricky to revenge with the weird angles and timings so just play patient and get it when you can. Big thing in this one is that megaman has limited kill options, so at kill % you just need to watch for fair, bair and f smash. Other wacky setups can happen but just practice your projectile and stage awareness to avoid most ridiculous stuff. Mixup recovery too. If you can avoid getting killed, you can live for a while and keep tacking on stray hits.", image: "./img/characters/megaman.png" },
            { opponent: "Wii Fit Trainer", category:"defensive", description: "First things first: camp out deep breathing. Just sit on top platform and shield, and just generally play to avoid all of that. Isolating this gimmick lets you compete normally+your own gimmicks on top. Revenge headers and suns if you can. Your hitboxes are much better and more forgiving than hers, and you can juggle her aggressively. When she’s at ledge, just keep taking all the free header revenges and use Incin’s excellent ledgetrapping to do big damage. If you want to edgeguard, aim for her vulnerable head on her up b.", image: "./img/characters/wiifittrainer.png" },
            { opponent: "Rosalina and Luma", category:"defensive", description: "See Ice Climbers for how to separate luma and rosa. It’s similar, except that luma also can’t shield the big collateral hits or smack you out of side b, so Luma is going to be dying a lot. Trouble is getting past Rosa’s passive wall. You’ll just need to play patient and get your kicks in on luma. If you can keep smacking Rosa while Luma’s gone, it can be hard for her to get any space back. Don’t force yourself into her space if she's walling you out, try to find a new approach.", image: "./img/characters/rosalina.png" },
            { opponent: "Little Mac", category:"rushdown", description: "Biggest thing in this mu is taking stage and pressing mac toward ledge. If he is cornered, he HAS to jump (which is bad for him) or make a commitment to avoid a side b, because there is no more room to dash back. This gives you really potent pressure and mixups against a cornered mac. Otherwise, watch out for his escapes using platforms for grounded movement and keep him away. In neutral just play patient and slowly press in your distance. You may need to make a lot of guesses when defending against burst options or overshoots, but guessing wrong isn’t too bad as long as you play safe when getting back.", image: "./img/characters/littlemac.png" },
            { opponent: "Greninja", category:"rushdown", description: "Understand what Greninja is looking for at different ranges. He has very potent options, but depending on how he’s positioned, he is limited to a few. If he’s grounded, watch for dash attack and d tilt. On close jumps, look out for nair, and on far jumps watch for fair. He’s going to be moving and hopping around to mixup the access to all his options, but try to understand what his looking for and what he could get off it.", image: "./img/characters/greninja.png" },
            { opponent: "Palutena", category:"fundies", description: "You can revenge autoreticle but not explosive flame. There’s not much of palu that you can exploit, but feel free to ledge slip nair to try and two frame her. Try not to get hit by nair at early percents but if you do just accept the damage and try to get back into the game soon. Focus on her walling patterns with aerials and see if there are any habits you can call out.", image: "./img/characters/palutena.png" },
            { opponent: "Pacman", category:"defensive", description: "You must have good item awareness to avoid getting hit by his setups. Try to keep yourself in a range where you can play passive and are out of his burst range, but if you see any shenanigans being set up, you are close enough to threaten him and force a response. You can revenge anytime he uses side b to ledge to recover and get a nice stack. You can also revenge things like the falling hydrants and the fruits, of course. You can compete with his fast aerials with your own oos and a couple call outs can tip the scales in your favor.", image: "./img/characters/pacman.png" },
            { opponent: "Robin", category:"defensive", description: "Take it slow like a lot of other zoners, but pay extra attention to Robin’s air-to-airs. Revenge is potent with landing because one slip up can cost Robin a lot. When getting off ledge against arcfire, you can drop off the ledge before the final hit and grab it again afterwards to avoid getting hit for stalling, and Robin doesn’t have any other options to punish you hanging on ledge unless he dashes in. Mix your stall with your other ledge options to find a way back.", image: "./img/characters/robin.png" },
            { opponent: "Shulk", category:"midrange", description: "Learn how to play around each Monado art and feel free to take the time to pull back and slow the pace of the match until an art runs out. Against smash, you can kill extremely early of course, but you have to look out for shulk’s options. Keep in mind that his throws, even in smash art, are significantly weaker than all his tilts and normals so if you’re not at a super high percent, you can actually hold shield and avoid getting up tilted randomly. Get in parries and revenges when needed in neutral. You may be able to stuff out his aerials before they come out.", image: "./img/characters/shulk.png" },
            { opponent: "Bowser Junior (Jr.)", category:"defensive", description: "If you can consistently deal with the clown cart, you’re in a good spot. To do this, you can beat it pretty well with a strong, large aerial (nair or fair!), revenge it (which can be baited) or just shield and try to reset the situation if you weren’t ready. Other than that, revenge is an extra option when dealing with both projectiles, and a lot of junior moves are prone to whiff punishing which you can take advantage of. Keep in mind he gets big damage off an early percent grab, but it’s a pretty slow one.", image: "./img/characters/bowserjr.png" },
            { opponent: "Duck Hunt", category:"defensive", description: "Pain. Duck Hunt is really cute but he’s a zoner with some of the trickiest projectiles to get around, especially for Incineroar. Revenge can be very inconsistent against the strange timings of the moves. Duck Hunt struggles when you’re right on him and suffocating him with your large hitboxes, and you can take those openings far to get a lot of damage. Learn the timing of all the gunmen, and get around clay pigeon as it can combo and can’t be challenged. He is going to be trying his hardest to break away though, so watch out for things like cans and clay pigeons to the face as aggressive escapes. He’s vulnerable when recovering, but keep in mind he can cancel his up b into one aerial or an airdodge.", image: "./img/characters/duckhunt.png" },
            { opponent: "Ryu", category:"rushdown", description: "Tricky slow paced neutral can make it very easy for Incin to get blown up. Keep your head on your shoulders and press in slowly and patiently, with the threat of dash attack or side b giving you more stage. You can revenge his projectiles but a late, slow moving red fireball can get you punished for revenging it. Safe fairs are solid in neutral as well. Once you find your opening you can be much more aggressive, as Ryu is pretty prone to combos. You can also revenge his up b everytime he comes to ledge, so you’ll have revenge while ledge trapping.", image: "./img/characters/ryu.png" },
            { opponent: "Ken", category:"rushdown", description: "A lot of the tips that apply to Ryu apply to Ken as well, but there are enough differences to separate them. Ken’s on shield setups are terrifying and it can be very difficult to figure out when or how you can escape. Disengaging with a roll away can be a good option, along with using up b oos armor to make it through some hitboxes. Ken may be more aggressive in neutral with nairs to get combos going, but as long as you respect it, anti airing or whiff punishing this move is not too troublesome.", image: "./img/characters/ken.png" },
            { opponent: "Cloud", category:"midrange", description: "Revenge is very good at limiting Cloud’s advantage state. He gets a lot from covering multiple options at once with his massive lagless aerials and most characters lose to his frame traps and coverage, but revenge can turn the tables. Since the reward on revenge is so high, it can force Cloud to drop frame traps and commit to a read, which allows you to escape a lot of situations and force more mixups. Getting off ledge and playing neutral is difficult, however, so pay attention to your opponent’s preferred options and find your punish windows. Calling out jumps can be effective.", image: "./img/characters/cloud.png" },
            { opponent: "Corrin", category:"midrange", description: "You may get juggled very hard but revenge is very good in a similar way to the way I described it in the Cloud matchup above. Other than that, Corrin tends to get less reward or struggle more in neutral due to their lower mobility so there’s less chasing of movement options on your part. Make sure to understand the pin mixups, and play around spaced aerials accordingly.", image: "./img/characters/corrin.png" },
            { opponent: "Bayonetta", category:"rushdown", description: "Playing out of shield is indeed the first step in dealing with Bayo. She’ll begin to pressure or grab your shield, but shield is a good center for all your mixups branching off of it. Learn to SDI her combos! #matchup-discussion has a pinned message with the basics of it, but you could find resources to learn more detailed sdi. Remember that she may do a ton of damage, but she struggles to kill so getting a lead and focusing on avoiding bair, dair or smash attacks is very good. Jump Side bs on your shield are punishable if you are positioned at the end of the move, so you can place yourself in the right place if you want a punish.", image: "./img/characters/bayonetta.png" },
            { opponent: "Inkling", category:"fundies", description: "This Mu feels like you’re constantly losing but then you take a look at the percents and it’s more even than you thought. You’re gonna want to focus on not getting hit by kill options because the longer you’re left alive, the more damage you can tack on and the higher chance you have an taking a stock and compounding a lead. Roller can be punished out of shield, but it’s extremely good at punishing whiffed aerials and catching panic options so play safe around it. Since the other main kill confirm is off a grab, you can try to use platforms to play around in the air and get trades off your nair to keep getting damage. Mixup your recovery and the timing of your ledge trap so you don’t get a stock stolen from you.", image: "./img/characters/inkling.png" },
            { opponent: "Ridley", category:"bigboi", description: "Play your good old heavy neutral and when you have an opening, carry it extremely far. Ridley has a nightmare of a time getting off ledge so you can cycle them there for a very long time, leading to a stock. Other than that, just play safe around d tilt and nair, which you can punish with fair. Remember that if you have higher percent than Ridley, you can’t really escape his side b, but if it’s the other way around you’ll both be released at equal frame advantage. I tend to use dariat in this situation as it beats a lot of options from Ridley, but pay attention to what they like to pick.", image: "./img/characters/ridley.png" },
            { opponent: "Simon/Richter", category:"defensive", description: "Revenging projectiles seems like a good idea but you can get swatted out of it by a whip attack at any second if you’re not careful. Escaping ledge is also a huge struggle so try to maintain stage control, or just avoid getting launched too many times. Their biggest weakness is getting you off of them, so make sure to make those openings count and punish their recovery once you send them offstage. Dariat is very good against tethers, but since theirs has good range you’ll need to be wary of mixups.", image: "./img/characters/ritcher.png" },
            { opponent: "King K Rool", category:"bigboi", description: "His projectiles give BIG revenge so it’s absolutely worth it, just be careful if he’s in position to punish you for revenging a cannonball. He’s a big body, his belly is at risk of cracking to a revenge attack, and he struggles to get off ledge or get down from juggles as long as you cover nair by whiff punishing, revenging, or trying to smash the belly armor open. Respect fair in neutral and if you get too scared and panic too much, you can be eating a lot of damage.", image: "./img/characters/kingkrool.png" },
            { opponent: "Isabelle", category:"defensive", description: "Fishing rod is actually difficult to deal with for Incineroar, and it gives Isabelle another way to get rid of revenge, but this time from a distance. Shielding it is always a good bet, and waiting for the rod to be retracted can let you then run in for a (potential?) punish. Jumping on her is also good but could be more committal, and these options are more difficult to perform if the lloyd mine is between you and her. You can shield the lloyd after stepping on if you want to set it off. Other than that, just view Villager’s tips as they are largely the same in general terms.", image: "./img/characters/isabelle.png" },
            { opponent: "Incineroar", category:"bigboi", description: "DITTO TIPS HERE WE GO! Incineroar largely struggles against side b because he’s not mobile enough to get around it. Especially online, you can barely do anything once that move is out, so a lot of neutral is defined by playing safely around it, or tossing it randomly. Other than that, just play better lol. Learn how to spike a low side b because it’s pretty easy.", image: "./img/characters/incineroar.png" },
            { opponent: "Piranha Plant", category:"trickster", description: "Revenge Ptooie when possible, and just play patiently around his setups. When you can get in, he struggles a lot to land or get off ledge. If you’re at ledge you need to pay attention to what he’s setting up and just have good awareness. He may seem easy to two frame but he has many stall options, so mixup how you pressure plant while they’re offstage.", image: "./img/characters/piranhaplant.png" },
            { opponent: "Joker", category:"rushdown", description: "Against a good Joker, there is a high chance you die whenever you’re sent reasonably far offstage. You need to pull out all the stocks when it comes to recovery mixup, and even then you might have to accept some early stock losses. On stage, you can revenge down gun if Joker tries to land on you with it. When arsene is out, any hit is going to drain a LOT of it so he has to play safe.", image: "./img/characters/joker.png" },
            { opponent: "Hero", category:"defensive", description: "You want to remain within threat distance so Hero doesn’t get away with all kinds of buffs. Even so, if you keep forcing your way in and get punished for it, its ok to sit back a bit and mix up the timing of your approach, even if it means Hero gets a couple menu pulls going. Respect options like side b or you’re going to be repeatedly shoved away.", image: "./img/characters/hero.png" },
            { opponent: "Banjo and Kazooie", category:"trickster", description: "Take revenge where you can get it, just be careful for the random bounce on grenegg. You can side b through wonderwing but since side b takes a bit to come out and you might get hit before you can get the grab, I find it’s very useful to just revenge wonderwing, especially because you can still get a punish afterward if you were in a good spot. Play patient and watch for Banjo’s kill options in neutral. When he’s at ledge, he will often set up a grenegg when coming onstage but this can be punished if read.", image: "./img/characters/banjo.png" },
            { opponent: "Terry", category:"rushdown", description: "Try to kill him early to limit the use of Go if you can. You can try to revenge his recovery options but they can be mixed in a variety of ways so don’t commit too hard. His up b has trouble snapping from closer distances so you can hit it with d tilt, dair or down smash if he does it too high, and if he doesn’t you might be able to call out that longer wait time with a run off aerial. Make sure to sdi jab 2 up and in if you think Terry will use power dunk, and sdi away if you think terry will use rising tackle. Use your large hitboxes and up b oos when necessary.", image: "./img/characters/terry.png" },
            { opponent: "Byleth", category:"midrange", description: "Play patient around the spaced aerials and fully shield nair as to not get hit by the landing hitbox. It’s best to leave their recovery alone, but if they shoot arrows at any point, that’s free revenge. Once you’re on them, they can have trouble shaking you off so press advantage, juggle, and ledge trap effectively. Keep an eye out for long range aggression off ledge.", image: "./img/characters/byleth.png" },
            { opponent: "Min Min", category:"defensive", description: "It may be best to retreat to platforms often and just wait around near min min and wait for some commitment. If you’re far away, use platforms and shield often to try and slowly make your way in. If she misses a smash attack when you’re nearby, you should be able to punish hard. Use dariat on her short range tether for early kills, but be prepared to deal with an arm as she covers her approach to ledge by revenging or waiting until it’s been thrown out.", image: "./img/characters/minmin.png" },
            { opponent: "Steve", category:"defensive", description: "When Steve builds a wall of blocks, don’t be predictable on how you get around it. It can be good to nair the block to break them up, jump over and try to mixup your landing, fake an approach over the blocks to bait a swing from Steve, or try to charge through them once they are close to breaking. Revenge will not be used up when attacking blocks! Keep Steve on his toes. If minecart hits your shield, buffer spotdodge or roll and you won’t get grabbed for it. If he uses minecart out of disadvantage, use jump revenge to avoid getting grabbed and get a pretty safe revenge boost. He can have trouble recovering if you don’t get hit by a minecart, so make sure to follow his swoops on elytra and keep him at ledge for a while.", image: "./img/characters/steve.png" },
            { opponent: "Sephiroth", category:"midrange", description: "It’s played kind of similar to Byleth, but his superior mobility can make it a lot harder to pin him down. When you finally do, he dies much earlier so you must take advantage of that. His close range tools tend to be short, and his long range ones are laggier so if you can stay within a mid range threat zone, you may be able to get good punishes on his tools. If he retreats and outruns you, you’ll just need to take stage. When they recovery with octoslash, you can revenge or jump to outspace the move and punish a regrab with dair.", image: "./img/characters/sephiroth.png" },
            { opponent: "Pyra and Mythra", category:"midrange", description: "Pyra: Don’t be too overzealous with preemptive strikes on her attacks, nor try to punish too hard out of shield against a spaced aerial. Focus on playing safe and getting a poor commitment out of her while you’re in range. If she throws side b on your shield, just immediately roll toward her and you’ll be totally safe while she’s still vulnerable from her sword being gone.\nMythra: Much more difficult in neutral, but trades and riskier options become much more rewarding. She has to enter your threat range somewhat to get things going so focus on finding patterns in her movement and trying to take advantage. Both characters have poor recoveries. You can dair Mythra out of photon edge easily, and pyra is pretty much forced to recover low or with an airdodge.", image: "./img/characters/pyra.png" },
            { opponent: "Kazuya", category:"rushdown", description: "Never go to a flat stage vs Kazuya. When getting hit by an electric wind god fist, Kazuya will be following the blue line that shows your launch direction. Since you’re stunned for so long, hold on direction the whole time and right before you leave the stun, move it in the other direction to quickly change your launch direction at the last second, making 0-Deaths much harder to pull off. Side b is a potent tool since the most consistent counter, jumping over it, is much tougher for Kazuya’s slow jump squat. Poking him with fair is good but a single well timed electric can beat this so make sure you’re always ambiguous with options. Run away when needed.", image: "./img/characters/kazuya.png" },
            { opponent: "Sora", category:"rushdown", description: "Sora’s shield pressure and fair/nair chains can often have small gaps between them when they try to go for something more interesting. Nair is good at shaking him off your shield, and revenge is excellent in interrupting both scenarios. Playing slow, holding center, and finding pokes can make Sora’s riskier setups not worth going for.", image: "./img/characters/sora.png" }
        ]
    };

    // Set character information
    document.querySelector('header h1').textContent = characterInfo.name;
    document.getElementById('description').textContent = characterInfo.description;

    // Filter characters
    const characterFilterInput = document.getElementById('character-filter');
    characterFilterInput.addEventListener('input', () => {
        const filterValue = characterFilterInput.value.toLowerCase();
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const name = card.querySelector('h3').textContent.toLowerCase();
            if (name.includes(filterValue)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Function to expand card on click
    function expandCard(card) {
        const description = card.querySelector('.description');
        description.style.display = description.style.display === 'none' ? 'block' : 'none';
        if (description.style.display === 'block') {
            card.style.gridColumnEnd = 'span 4'; // Expand card to fill 4 columns
            card.style.gridRowEnd = 'span 2'
        } else {
            card.style.gridColumnEnd = 'auto'; // Revert to auto sizing
            card.style.gridRowEnd = 'auto'
        }
    }

    // Function to toggle favorite status
    function toggleFavorite(card) {
        const favoriteIcon = card.querySelector('.favorite');
        const opponent = card.querySelector('h3').textContent;
        const index = characterInfo.matchups.findIndex(matchup => matchup.opponent === opponent);
        if (characterInfo.matchups[index].favorite) {
            characterInfo.matchups[index].favorite = false;
            favoriteIcon.classList.remove('fas');
            favoriteIcon.classList.add('far');
        } else {
            characterInfo.matchups[index].favorite = true;
            favoriteIcon.classList.remove('far');
            favoriteIcon.classList.add('fas');
        }
        //reorderMatchups(); // Reorder matchups based on favorites
    }

    // Function to toggle favorite status
    function toggleFavorite(card) {
        const favoriteIcon = card.querySelector('.favorite');
        const opponent = card.querySelector('h3').textContent;
        const index = characterInfo.matchups.findIndex(matchup => matchup.opponent === opponent);
        const isFavorite = !characterInfo.matchups[index].favorite;
        characterInfo.matchups[index].favorite = isFavorite;
        favoriteIcon.innerHTML = isFavorite ? '❤️' : '🤍'; // Update favorite icon
        updateCards(); // Reorder matchups based on favorites
        saveFavoritesToCookies(); // Save favorite characters to cookies
    }
    
    function updateFavorites() {
        const favoritesContainer = document.getElementById('favorites-container');
        favoritesContainer.innerHTML = ''; // Clear existing favorite cards

        const favoriteMatchups = characterInfo.matchups.filter(matchup => matchup.favorite);

        favoriteMatchups.forEach(matchup => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${matchup.image}" alt="${matchup.opponent}">
                <h3 style="display:none">${matchup.opponent}</h3>
                <div class="favorite">❤️</div> <!-- Favorite icon -->
                <div class="description">${matchup.description}</div>
            `;
            const description = card.querySelector('.description');
            description.style.display = 'none'; // Ensure description is initially hidden
            card.addEventListener('click', () => {
                expandCard(card);
            });
            const favoriteIcon = card.querySelector('.favorite');
            favoriteIcon.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent expanding card when clicking favorite icon
                toggleFavorite(card);
            });
            favoritesContainer.appendChild(card);
        });
    }

    // Function to update the display of cards
    function updateCards() {
        const categoriesContainer = document.getElementById('categories-container');
        categoriesContainer.innerHTML = ''; // Clear existing categories

        const categories = {}; // Object to store matchups grouped by categories

        // Group matchups by categories
        characterInfo.matchups.forEach(matchup => {
            if (!categories[matchup.category]) {
                categories[matchup.category] = []; // Initialize category array if not exists
            }
            categories[matchup.category].push(matchup); // Add matchup to its category
        });

        // Iterate over categories
        Object.keys(categories).forEach(category => {
            // Create section for the category
            const section = document.createElement('section');
            section.className = 'category-section';

            // Create category header
            const categoryHeader = document.createElement('h2');
            categoryHeader.textContent = category; // Set category name
            section.appendChild(categoryHeader);

            // Create cards container for matchups in this category
            const cardsContainer = document.createElement('div');
            cardsContainer.className = 'cards-container';

            // Create cards for matchups in this category
            categories[category].forEach(matchup => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${matchup.image}" alt="${matchup.opponent}">
                    <h3 style="display:none">${matchup.opponent}</h3>
                    <div class="favorite">${matchup.favorite ? '❤️' : '🤍'}</div> <!-- Favorite icon -->
                    <div class="description">${matchup.description}</div>
                `;
                const description = card.querySelector('.description');
                description.style.display = 'none'; // Ensure description is initially hidden
                card.addEventListener('click', () => {
                    expandCard(card);
                });
                const favoriteIcon = card.querySelector('.favorite');
                favoriteIcon.addEventListener('click', (event) => {
                    event.stopPropagation(); // Prevent expanding card when clicking favorite icon
                    toggleFavorite(card);
                });
                cardsContainer.appendChild(card);
            });

            section.appendChild(cardsContainer);
            categoriesContainer.appendChild(section);
        });

        // Update favorite matchups display
        updateFavorites();
    }

    // Function to save favorite characters to cookies
    function saveFavoritesToCookies() {
        const favorites = characterInfo.matchups.filter(matchup => matchup.favorite).map(matchup => matchup.opponent);
        const order = characterInfo.matchups.map(matchup => matchup.opponent);
        document.cookie = `favorites=${JSON.stringify(favorites)}; order=${JSON.stringify(order)}; expires=Fri, 31 Dec 9999 23:59:59 GMT`; // Save favorites and order to cookies
    }

    // Function to load favorite characters from cookies
    function loadFavoritesFromCookies() {
        const cookies = document.cookie.split(';'); // Get all cookies
        for (const cookie of cookies) {
            const [name, value] = cookie.split('=');
            if (name.trim() === 'favorites') {
                const favorites = JSON.parse(value); // Parse favorites from cookie value
                for (const favorite of favorites) {
                    const index = characterInfo.matchups.findIndex(matchup => matchup.opponent === favorite);
                    if (index !== -1) {
                        characterInfo.matchups[index].favorite = true; // Set favorite status
                    }
                }
                updateCards(); // Reorder matchups based on loaded favorites
                break;
            }
        }
    }

    // Initial loading of favorites from cookies
    loadFavoritesFromCookies();

    // Initial display of cards
    updateCards();
});
