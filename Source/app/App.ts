import { Engine } from "@rocketfuel/core/engine";
import { CompositeNode } from "@rocketfuel/core/nodes";
import { IJSONObject, JSONUtil } from "@rocketfuel/core/util";

export class App extends CompositeNode
{
	/**
	 * Creates an instance of the App.
	 */
	public constructor( engine: Engine )
	{
		super( "AppRoot" );

		const configData = engine.DownloadManager.GetJson( "Config.json" );
		const appConfig = JSONUtil.GetAssertedAsType< IAppConfig >( configData, "App" );

		const scene = engine.NodeFactory.Create( engine, appConfig.SceneNode );

		this.AddChild( scene );
	}
}

interface IAppConfig
{
	SceneNode: IJSONObject;
}
