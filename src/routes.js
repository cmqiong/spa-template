import COMMON from './config/routes/common';
import USER from './config/routes/user';
import QUESTION from './config/routes/question';

const routes = COMMON.concat(
	USER.usermap,
	QUESTION.ROUTERMAP,
	{
		path: '*',
		component: { template: '<div>nothing</div>' },
	},
);

export default routes;
