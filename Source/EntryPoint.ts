import { HtmlHelper } from "@rocketfuel/core/dom";
import { Engine, IInitConfig } from "@rocketfuel/core/engine";
import { Point2D } from "@rocketfuel/core/math";
import { Asserts } from "@rocketfuel/core/util";
import { App } from "./app/App";

/**
 *
 */
function EntryPoint( divId: string )
{
	const maxSize = new Point2D( 1920, 1920 );
	const safeZone = new Point2D( 1200, 960 );

	const div = document.getElementById( divId );
	Asserts.AssertNotNull( div );

	const config = {
		resource_server: "./",
		resource_file: "Download.json",
		Render: {
			MaxSize: {
				X: 1920,
				Y: 1920,
			},
			SafeZone: {
				X: 1200,
				Y: 960,
			},
		},
	} as IInitConfig;

	const engine = new Engine( div, config );
	engine.Init().then( () => engine.Start( new App( engine ) ) );
}

EntryPoint( "appDiv" );
