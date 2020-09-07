import React, { Component, Fragment} from "react";
import './App.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';
import { Container, Box } from '@material-ui/core';
import useScript from 'usescript-hook';
import CircularProgressWithLabel from './circularProgress';
import google from './assets/images/google.png';
import AddVendorModal from './AddVendorModal';
class Content extends Component {
    constructor(props) {
        super(props);
        this.state={
            vendors:[],
            editModal:false,
            vendorList:[],name:"",score:"",description:"",history:"",founded:"",info:[],
            investors:"",founders:"",pricing:"",features:"",studies:"",errors:false,open:false,editPart:""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    // handleChange=(evt)=> {
    //   const value = evt.target.value;
    //   console.log("evt",evt)
    //   const vendorList=this.state.vendorList
    //   vendorList.evt.target.name=value
    //   let venderl=vendorList[0].vendorList.evt.target.name
    //   this.setState({
      
    //     vendorList:venderl
    //     // [evt.target.name]: value
    //   });
    // }
    handleChange =  evt => {
      const value = evt.target.value;
      console.log(value)
      this.setState({val:value})
      let vendorList = this.state.vendorList ;
      let name1="";
      name1=evt.target.name;
      console.log(">>>>>>>>>>",name1)
      if(name1==="name")
      this.setState({name:value})
      else if(name1==="score")
      this.setState({score:value})
      else if(name1==="description")
      this.setState({description:value})
      else if(name1==="history")
      this.setState({history:value})
      else if(name1==="founded")
      this.setState({founded:value})
      else if(name1==="investors")
      this.setState({investors:value})
      else if(name1==="founders")
      this.setState({founders:value})
      else if(name1==="pricing")
      this.setState({pricing:value})
      else if(name1==="features")
      this.setState({features:value})
      else if(name1==="studies")
      this.setState({studies:value})
      else if(name1==="info")
      this.setState({info: [value]})
      // if(this.state.name&&this.state.score&&this.state.description&&this.state.history&&this.state.founded
      //   &&this.state.investors&&this.state.founders&&this.state.pricing&&this.state.features&&this.state.studies){
          
      //     this.setState({errors:false}) 
      //   }
      //   else{
      //     this.setState({errors:true})
      //   }
   
  
    }
    addVendorModal = (editPart) => {
      if(editPart==="addrow"){
        if(this.state.vendors.length!==0){
          this.setState({ editModal: true ,editPart:editPart});
        }
        
      }
      else if (editPart==="add"){
        if(this.state.vendors.length<4)
        this.setState({ editModal: true ,editPart:editPart});
      };
      }
       
      closeEditModal = () => {
        this.setState({ editModal: false});
      };
      delete=(e,i)=>{
        console.log(e,i)
        const vendors = this.state.vendors;

        vendors.splice(i, 1);
  this.setState({ vendors });
      }
      open=()=>{
        let open=!this.state.open
        this.setState({
          ...this.state,
          open:open
        })
      }
      deleteRow=()=>{
        this.setState({info:[]})
      }
    save=(e)=>{
      // this.setState({ vendorList: [...this.state.vendorList, vendorList] })
       
        e.preventDefault();
        if(this.state.editPart==="addrow"){
          const obj ={'info':this.state.info}
          this.setState({errors:false,editModal: false,}) 
        }
        else if(this.state.editPart==="add"&&this.state.name&&this.state.score&&this.state.description&&this.state.history&&this.state.founded
          &&this.state.investors&&this.state.founders&&this.state.pricing&&this.state.features&&this.state.studies){
            const obj = {'name':this.state.name, 'score':this.state.score,'description':this.state.description,
        'history':this.state.history,'founded':this.state.founded,'investors':this.state.investors,'founders':this.state.founders,
        'pricing':this.state.pricing,'features':this.state.features,'studies':this.state.studies,'info':this.state.info};
            this.setState({errors:false,editModal: false,vendors: [...this.state.vendors, obj]}) 
          }
          else{
            this.setState({errors:true})
          }
        
        
    }
    render() {
        const {vendors} = this.state;

         console.log("venderlength",this.state) 
    return (
       <Fragment>
        <div className={!this.state.editModal?"container":"fadeContainer"}>
        <Box boxShadow={1} className="header">
          <span onClick={() =>this.addVendorModal("addrow")} className="add">ADD CRITERIA +</span>
        </Box>
        <Box boxShadow={1} className="content">
          <div style={{ flex: 0.5 }} className="column">
            <div className="logoContainer">
              <div className="logoadd">
                <i onClick={() =>this.addVendorModal("add")} class="fa fa-plus-circle" style={{ color: '#bbb', fontSize: '2rem' }} aria-hidden="true"></i>
              </div>                     
              <div className="add"> <a  onClick={() =>this.addVendorModal("add")}>Add New Vendor</a></div>
            </div>
            <div className="cell">
              Overall Score
            </div>
            <div className="cell">
              Product Description
            </div>
            <div onClick={this.open} className="cell">
              <i  className={this.state.open?"fa fa-angle-down mr-20":"fa fa-angle-right mr-20"} aria-hidden="true"></i>
              Funding History
            </div>
            {this.state.open?
            <div className="cell-leaf">
              Founded
            </div>:null}
            {this.state.open?
            <div className="cell-leaf">
              Key Investors
            </div>:null}
            {this.state.open?
            <div className="cell-leaf">
              Founders
            </div>:null}
            <div className="cell">
              Pricing
            </div>
            <div className="cell">
              Features
            </div>
            <div className="cell">
              Customer Care Studies
            </div>
            {this.state.info.length!==0?
            <div className="cell">
            Company Info<button style={{background:"none",color:"red",marginLeft:"4px"}}
                    type="button"
                    className="btn btn-black close-button"
                    data-dismiss="modal"
                    aria-label="Close"
                     onClick={this.deleteRow}
                  >
                    <span style={{fontSize:"17px"}}aria-hidden="true">×</span>
                  </button>
            </div>:null}
          </div>
          {vendors.length? vendors.map((vendor,index) => <div  style={{ flex: 1/vendors.length }} className="column">
            <div className="logoContainer">
            
              <div className="logo">
              <button
                    type="button"
                    className="btn btn-black close-button close-col"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={()=>this.delete(vendor,index)}
                  >
                    <span style={{fontSize:"17px"}}aria-hidden="true">×</span>
                  </button>
                <img  className="image" src={google} alt="imggoogle"/>
                <p style={{fontSize:"10px",margin:"0px"}}>{vendor.name}</p>
              </div>
              {/* <div className="close">×</div> */}
            </div>
            <div className="cell center">
              <CircularProgressWithLabel value={6.1} />
            </div>
            <div className="cell">
            {vendor.description}
            </div>
            <div className="cell">
            {vendor.history}
            </div>
            {this.state.open?
            <div className="cell">
              {vendor.founded}
            </div>:null}
            {this.state.open?
            <div className="cell">
              {vendor.investors}
            </div>:null}
            {this.state.open?
            <div className="cell">
              {vendor.founders}
            </div>:null}
            <div className="cell">
            {vendor.pricing}
            </div>
            <div className="cell">
            {vendor.features}
            </div>
            <div className="cell">
            {vendor.studies}
            </div>
            {this.state.info.length!==0?
            <div className="cell">
              {this.state.info[index]}
            </div>:null}
          </div>):null}
        </Box>
        {this.state.editModal && (
        <AddVendorModal
          {...this.props}
          list={this.state.vendorList}
          closeModal={this.closeEditModal}
          index={this.state.index}
          editPart={this.state.editPart}
          handleChange={this.handleChange}
          save={this.save}
          errors={this.state.errors}
          vendors={this.state.vendors}
          
        />
      )}
      </div>
    
      </Fragment>
    );
}
}
export default Content