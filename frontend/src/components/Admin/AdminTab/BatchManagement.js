import HeaderCell from '../../Utils/HeaderCell';
import '../../Utils/Table.scss'
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from '../../../Redux/User/UserAction';
import {BATCH_MAPPING, BATCH_COLUMNS, currentSortYear} from '../../Utils/CommonConstants'
import {capitalizeCustom} from '../../Utils/CommonFunctions'
import { makeStyles } from '@material-ui/core';
import BatchRow from '../../Utils/BatchRow'

// eslint-disable-next-line

const useStyles = makeStyles((theme) => ({
  table:{
    width: "100%",
  },
  autoScroll:{
    overflowX:"auto",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


function BatchManagement() {

  const userList = useSelector(state=>state.userList);
  const {loading, users, error} = userList;
  useSelector(state=>state.userSave);
  const dispatch = useDispatch();
  const grandTotal = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  const classes = useStyles()
  const  studentList = users.filter((stud)=>{return (stud.isAdmin === false) && (stud.year === currentSortYear.value)});

  const updateDatabase = (values) => {
    let user = users.filter((stud)=>{return (stud.name === values.name)})[0];
    user.batches[values.batch].isBatch = (values.batchSelect ==='false')?true:false;
    dispatch(saveUser(user))
  }

  const findGrandTotal = () =>{
    studentList.map(user => {
      user.batches.map((batch,count) => {
        grandTotal[count%15] += (batch.isBatch?1:0)
        return batch
      })
      return user
    })
  }

  return (
    <>
    {(loading) ? (
        <div>Loading....</div>
      ) : (error) ? (
        <div>{error}</div>
      ) : (<> 
        <div className={classes.table}>
          {findGrandTotal()}
          <div className={classes.autoScroll}>
            <div
            className="table fadeInUp"
            style={{
              gridTemplateColumns: `repeat(${16}, auto)`,
            }}
            >
              <div className="row heading">
                <div className="cell heading">
                  <div>Student Name</div>
                </div>
                {BATCH_COLUMNS.map((batch,count) => (
                  <HeaderCell
                    key={count}
                    value={capitalizeCustom(BATCH_MAPPING[batch].displayName)}
                  />
                ))}
              </div>
                {studentList.map((user,count) => (
                  <BatchRow
                    key={count}
                    data={user}
                    updateDatabase={updateDatabase}
                  />)
                )}
              <div className="row heading">
                <div className="cell heading">
                  <div>Grand Total</div>
                </div>
                {grandTotal.map((value,count) => (
                    <HeaderCell
                    key={count}
                    {...{value}}
                    />
                ))}
              </div>
            </div>
          </div>
        </div>
        </>
      )}
    </>
  );
}


export default BatchManagement;
