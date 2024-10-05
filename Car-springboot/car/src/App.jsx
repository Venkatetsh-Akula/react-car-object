import './App.css';
import DeleteMappingCar from './DeleteMappingCar';
import GetCarById from './GetCarById';
import GetMappingCar from './GetMappingCar';
import PostMappingCar from './PostMappingCar';
import PutMappingCar from './PutMappingCar';

function App() {
  return (
    <div>
      <h1>Get All Car Details</h1>
        <GetMappingCar/>
        <h1>Get Car Details Based on Id</h1>
        <GetCarById />
        <h1>Save Car Details</h1>
        <PostMappingCar/>
        <h1>Delete Car Details based on Id</h1>
        <DeleteMappingCar/>
        <h1>Update Car Details Here</h1>
        <PutMappingCar/>
    </div>
  );
}

export default App;
