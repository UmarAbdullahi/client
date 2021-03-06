import { combineReducers } from 'redux';
import registration from './registration';
import getallservices from './getallservices';
import getmember from './getmember';
import getservicebyid from './getservicebyid';
import putbasicuser from './putbasicuser';
import getservicetalent from './getservicetalent';
import getorder from './getOrder';
import transaction from './transaction';
import getcount from './getcount';
import getorderbytalent from './getOrderByTalent';
import bestpopular from './bestpopular';
import bestcategory from './bestcategory';
export default combineReducers({
    getorderbytalent,
    getorder,
    registration,
    getallservices,
    getmember,
    getservicebyid,
    putbasicuser,
    getservicetalent,
    transaction,
    getcount,
    bestpopular,
    bestcategory,
});
