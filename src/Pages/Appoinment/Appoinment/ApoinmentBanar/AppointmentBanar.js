
import chair from '../../../../assets/images/chair.png'
import bgImg from '../../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';

const AppointmentBanar = ({selectDate,setSelectDate}) => {
   
    return (

        <div className="hero" style={{backgroundImage:`url(${bgImg})`}}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='chaire' />
    <div>
    <DayPicker
    mode='single'
    selected={selectDate}
    // onSelect={setSelectDate} ata use korle date a daboul click korle undifined dekhabe
    onSelect={(data)=>{
      if(data){
        setSelectDate(data)
      }
      }}
    />
    {/* NOTE: onSelect={(data)=>{
 if(data){
 setSelected(data)
 }
 }}
 এভাবে ব্যবহার করতে পারেন। ডাবল ক্লিক করলে ডেট ডিসিলেক্ট হয়ে যায়। তাই এমন টি হয়। */}
    </div>
  </div>
</div>
    );
};

export default AppointmentBanar;