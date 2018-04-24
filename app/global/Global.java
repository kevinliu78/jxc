package global;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import akka.actor.ActorSystem;
import akka.actor.Cancellable;
import play.Application;
import play.GlobalSettings;

public class Global extends GlobalSettings {
	private static final Logger logger = LoggerFactory.getLogger(Global.class);
	private Cancellable dbSync;

	/**
	 * constent names
	 */
	private static final String NAME_ACTORSYSTEM_PORAL = "PoralActorSystem";
	protected static final String SEPARATOR = "_";

	private static final ActorSystem portalActorSystem = ActorSystem.create(NAME_ACTORSYSTEM_PORAL);


	//	private final static AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext();
	private static ConfigurableApplicationContext ctx;
//    private static CableModemService cableModemService;
	public void onStart(Application app)
	{
		logger.info("Application has started");
		ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
	}
		

	public static String getPoralActorSystemName() {
		return NAME_ACTORSYSTEM_PORAL;
	}
}
