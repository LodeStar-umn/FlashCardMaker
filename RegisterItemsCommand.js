/**
 * @class jet.controller.RegisterItemsCommand
 * @extends puremvc.SimpleCommand
 */
puremvc.define
(
	// CLASS INFO
	{
		name: 'jet.controller.command.RegisterItemsCommand',
		parent:puremvc.SimpleCommand
	},
	
	// INSTANCE MEMBERS
	{  	
		/*
		 * 
		 * REGISTER YOUR PAGE CLASSES HERE, WITH THE PAGETYPE KEY FROM THE LXML
		 */
		registerItems: function(facade){
		
		
			//register pages
			
			facade.registerNode("TEXT", function(){return new jet.view.page.WidgetPage();});	
			facade.registerNode("MC1", function(){return new jet.view.page.QuestionPage();});	
			facade.registerNode("MC2", function(){return new jet.view.page.QuestionPage();});
			facade.registerNode("MC3", function(){return new jet.view.page.QuestionPage();});
			facade.registerNode("MATCHING", function(){return new jet.view.page.MatchingPage();});	
			facade.registerNode("CATEGORIES", function(){return new jet.view.page.CategoriesPage();});	
			facade.registerNode("SHORTANSWER", function(){return new jet.view.page.ShortAnswerPage();});
			facade.registerNode("FLASHCARDS", function(){return new jet.view.page.FlashCardPage();});	
			facade.registerNode("REPORT", function(){return new jet.view.page.ReportPage();});	
			facade.registerNode("WALL", function(){return new jet.view.page.WallPage();});
			facade.registerNode("GATE", function(){return new jet.view.page.GatePage();});	
			facade.registerNode("MENU", function(){return new jet.view.page.MenuPage();});
			facade.registerNode("IMAGE", function(){return new jet.view.page.ImagePage();});
			facade.registerNode("VIDEO", function(){return new jet.view.page.VideoPage();});
			facade.registerNode("DRAGNDROP", function(){return new jet.view.page.DragNDropPage();});
			facade.registerNode("LA", function(){return new jet.view.page.LongAnswerPage();});
			facade.registerNode("INTERVIEW", function(){return new jet.view.page.InterviewPage();});
			facade.registerNode("JOURNAL", function(){return new jet.view.page.JournalPage();});
			facade.registerNode("CROSSWORD", function(){return new jet.view.page.CrosswordPage();});
			facade.registerNode("TILES", function(){return new jet.view.page.TilesPage();});
			facade.registerNode("ORGANIZER", function(){return new jet.view.page.OrganizerPage();});
			facade.registerNode("VIDEOSCENARIO", function(){return new jet.view.page.VideoScenarioPage();});
			facade.registerNode("DIALOG", function(){return new jet.view.page.DialogPage();});
			facade.registerNode("LAYOUT_1", function(){return new jet.view.page.Layout1Page();});
			
			
			
			//register mediators
			facade.registerMediator( new jet.view.mediator.HeaderComponentMediator );
			facade.registerMediator( new jet.view.mediator.ViewerComponentMediator );
			facade.registerMediator( new jet.view.mediator.NavigatorComponentMediator );
			facade.registerMediator( new jet.view.mediator.DashboardComponentMediator );
				
	},
		
	   
	   execute: function(data){
		   
		    var xml = data.getBody();
			var facade = this.facade;
			this.registerItems(facade);
			
			//After all items are registered, start building them out, according to the LXML
			facade.sendNotification( jet.AppConstants.BUILD_ITEMS, xml);
		
	   }
		
	}
			
	
			
);
