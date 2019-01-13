package gwt.ionic.component.client.ui;

import elemental2.dom.Element;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLDocument;
import gwt.ionic.component.consts.Tag;

public abstract class IonComponent{
	public Element element;
	
	public abstract Tag getIonTag();
	
	public IonComponent() {
		this.element = this.createElement();
	}
	
	private Element createElement() {
		HTMLDocument document = DomGlobal.document;
		String ionTagName = getIonTag().name;
		Element ionElement = document.createElement(ionTagName);
		return ionElement;	
	}
	
}
