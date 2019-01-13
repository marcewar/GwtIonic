package gwt.ionic.core.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.ScriptInjector;
import com.google.gwt.core.client.ScriptInjector.FromUrl;

public class GwtIonicCoreEntryPoint implements EntryPoint {

	@Override
	public void onModuleLoad() {
		this.injectIonicScriptTag();
	}
	
	private void injectIonicScriptTag() {
		String currentGwtModule = GWT.getModuleName();
		FromUrl injector = ScriptInjector.fromUrl(currentGwtModule + "/ionic.js");
		injector.setWindow(ScriptInjector.TOP_WINDOW);
		injector.inject();
	}
	
}
