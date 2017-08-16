var GDTPlus = {};

//Platform Images
var PlaceholderImage = [GDT.getRelativePath() + "../../Images/Placeholder/PlaceholderImage.png"];
var MVImage = [GDT.getRelativePath() + "../../../../../images/platforms/Master V.png"];
var VGearImage = [GDT.getRelativePath() + "../../../../../images/platforms/superb/Vena Gear.png"];
var VOasisImage = [GDT.getRelativePath() + "../../../../../images/platforms/superb/Vena Oasis.png"];
var DreamVastImage = [GDT.getRelativePath() + "../../../../../images/platforms/superb/DreamVast.png"];

//Remove Vena Platforms
var platformNames = ["Master V","Vena Gear","Vena Oasis","DreamVast"];

for (var pname = 0; pname < Platforms.allPlatforms.length; pname++) {
    for (var pname2 = 0; pname2 < platformNames.length; pname2++) {
var platform = Platforms.allPlatforms[pname];
        if (platform.id == platformNames[pname2])
            Platforms.allPlatforms.remove(platform);
    }
}

//Master V
GDT.addPlatform({
	id : "GDT+.MasterV",
	name : "Master V",
	company : "Vena",
	startAmount : 0.43,
	marketKeyPoints : [{
			date : "4/1/1",
			amount : 0.456,
		},	{
			date: "6/6/2",
			amount: 0.466,
		}
	],
	unitsSold : 0.7,
	licencePrize : 80000,
	published : "3/2/3",
	platformRetireDate : "11/3/4",
	developmentCosts : 30000,
	genreWeightings : [0.9, 0.7, 0.8, 0.8, 0.7, 1],
	audienceWeightings : [0.9, 1, 0.7],
	techLevel : 2,
	iconUri : MVImage,
});

GDT.addEvent({
	id : "GDT+.MasterV.Rumour",
    date : "2/10/3",
	getNotification : function (company) {
        return new Notification({
            header : "Industry News".localize(),
            text: "Rumours have recently surfaced stating that Vena, the Japanese company popular for their arcade games are planning to release a home console which is intended to compete with the Ninvento TES.".localize(),
        });
    }
});

GDT.addEvent({
	id : "GDT+.MasterV.Announcement",
	date : "2/12/1",
	getNotification : function (company) {
		return new Notification({
			sourceId : "GDT+.MasterV.Announcement",
			header : "Industry News",
			text : "After months of rumours, Vena has officially announced their new home console, named the Master V. \n\nWould you like the view the specs of the Master V?",
			image : MVImage,
			options: ["View Specs", "Ignore Specs"],
		});
	},
	
	complete : function (decision) {
		var company = GameManager.company;
		
		if (decision === 0) {
			var OptionOne = new Notification({
				header : "Master V Specs",
				text : "Master V Specs: \nCPU - Zileg X80 @ 4MHz\nSystem Memory - 8kB\nVideo Memory - 16kB\nDisplay - 256 x 192 with 32 on-screen colours\nSound - Tennessee Electronics SM98467",
				image : MVImage,
			});
			var OptionOneA = new Notification({
				header : "Industry News",
				text : "Vena have announced they intend to release the new console {0}.".format(General.getETADescription("2/12/1", "3/2/3")),
				image : MVImage,
			});
			company.activeNotifications.addRange(OptionOne.split());
			company.activeNotifications.addRange(OptionOneA.split());
			return;
		}
		
		if (decision === 1) {
			var OptionTwo = new Notification({
				header : "Industry News",
				text : "Vena have announced they intend to release the new console {0}.".format(General.getETADescription("2/12/1", "3/2/3")),
				image : MVImage,
			});
			company.activeNotifications.addRange(OptionTwo.split());
			return;
		}
	},
});

GDT.addEvent({
	id : "GDT+.MasterV.Success",
    date : "1/1/1",
	//date : "3/3/2",
	getNotification : function (company) {
        return new Notification({
            header : "Industry News".localize(),
            text: "The Master V, which was recently released by Vena has stirred up the worldwide platform market.\n Industry experts are saying that the console will flourish in all regions of the world except North America due to poor marketing.".localize(),
			image : MVImage,
        });
    }
});