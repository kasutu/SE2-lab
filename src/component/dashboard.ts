import WebPage from '../abstract/webPage';

export default class Dashboard extends WebPage {
	protected title: string;
	protected paragraph: string;
	currentUserId: string | undefined;

	constructor() {
		super();
		this.currentUserId = undefined;
		this.title = 'User Dashboard';
		this.paragraph = 'lorem lorem';
	}
}
