const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
  cash: 200
};

const roadReducer = (state = initialWagonState, action) => {
      switch(action.type) {

         case 'gather' : {
            return {
              ...state,
              supplies: state.supplies + 15,
              distance: state.distance,
              days: state.days + 1 
              }
         }

         case 'travel' : {
           return {
             ...state,
              supplies: state.supplies - (20 * action.payload),
              distance: state.distance + (10 * action.payload),
              days: state.days + (action.payload)
           }
         }

         case 'tippedWagon' : {
           return {
             ...state,
              supplies: state.supplies - 30,
              distance: state.distance,
              days: state.days + 1
           }
         }

         case 'sell' : {
           return {
             ...state,
             supplies: state.supplies -  20,
              cash: state.cash + 5
           }
         }

         case 'buy' : {
           return {
             ...state,
              supplies: state.supplies + (action.payload * 25),
              cash: state.cash - (action.payload *15)
           }
         }

         case 'theft' : {
           return {
             ...state,
             cash: state.cash /= (action.payload * 2)
           }
         }

      default: {
        return state;
      }
      }

}

//first initilization
let wagon = roadReducer(undefined, {});
console.log(wagon);

//first day travel
wagon = roadReducer(wagon, {type: 'travel', payload: 1});
console.log(wagon);

//second day and stop for supplies
wagon = roadReducer(wagon, {type: 'gather'});
console.log(wagon);

//third day tring to ford a river and wagon tiping
wagon = roadReducer(wagon, {type: 'tippedWagon'});
console.log(wagon);

//next on a 3 days travel
wagon = roadReducer(wagon, {type: 'travel', payload: 3});
console.log(wagon)


