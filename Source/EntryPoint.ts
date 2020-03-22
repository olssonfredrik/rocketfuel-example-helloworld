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
	const canvas = HtmlHelper.CreateCanvas( maxSize );
	div.appendChild( canvas );

	const glContext = HtmlHelper.CreateWebGLContext( canvas );
	Asserts.AssertNotNull( glContext, "WebGL Not supported!" );

	const config = { resource_server: "./", resource_file: "Download.json" } as IInitConfig;
	const engine = new Engine( glContext, safeZone, canvas, div, config );
	HtmlHelper.ResizeHandler( canvas, div, engine, safeZone, maxSize );
	engine.Start().then( () => engine.SetChild( new App( engine ) ) );
}

EntryPoint( "appDiv" );
