package gwt.ionic.component.consts;

public enum Tag {
	ION_BADGE("ion-badge"),
	ION_BUTTON("ion-button"),
	ION_CARD("ion-card"),
	ION_CARD_CONTENT("ion-card-content"),
	ION_CARD_HEADER("ion-card-header")
	;
	
	private Tag(String valor){
		name = valor;
	}
	
	public final String name;
}
