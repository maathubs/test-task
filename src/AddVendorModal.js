import React, { Component, Fragment } from "react";
// import { Field, FieldArray, reduxForm } from "redux-form";




class AddVendor extends Component {
  constructor(props) {
    super(props);
    
    

    this.state = {
      vendorList:[{
        name:"",score:"",description:"",history:"",founded:"",
        investors:"",founders:"",pricing:"",features:"",studies:""
      }]
      
    };
  }

  
//   componentDidMount() {
//     document.body.classList.add(MODAL_OPEN_CLASS);
    
//   }

  

//   componentWillUnmount() {
//     document.body.classList.remove(MODAL_OPEN_CLASS);
//   }
//  handleChange=(evt)=> {
//   const value = evt.target.value;
//   setState({
//     ...state,
//     [evt.target.name]: value
//   });
// }
handleChange = (e) => {
  let vendorList = { ...this.state.vendorList };
  vendorList[e.target.name] =e.target.value
  this.setState({  vendorList: vendorList });
};  

  render() {
    
    return (
      <Fragment>
        <div id="modal-block" className="Backdrop">
          <div
            className= "modal form-modal show"
               
            
            tabIndex="-1"
            role="dialog"
            aria-labelledby="TermsLabel"
            style={{ paddingRight: "15px", display: "block" }}
          >
            <div
              className="modal-dialog modal-dialog-centered"
              role="document"
              
            >
              <div
                className="modal-content"
                
              >
                <div className="modal-header" style={{ padding: "2rem 2rem" }}>
                {this.props.editPart==="add"?<h5 className="modal-title" id="TermsLabel">
                      Add New Vendor
                    
                <button
                    onClick={this.props.closeModal}
                    type="button"
                    className="btn btn-black close-button close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button></h5>:null}
                  {this.props.editPart==="addrow"?<h5 className="modal-title" id="TermsLabel">
                      Add New Criteria
                    
                <button
                    onClick={this.props.closeModal}
                    type="button"
                    className="btn btn-black close-button close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button></h5>:null}
                  </div>
               
                  {this.props.editPart==="add"?<div className="modal-body">
                    <form
                      className="row"
                      id="create-project-form"
                      enctype="multipart/form-data"
                    >
                      <div className="col-sm-6 form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          className="form-control" 
                          name="name"
                          onChange={(e)=>this.props.handleChange(e)} 
                        />
                        
                      </div>
                      <div className="col-sm-6 form-group">
                        <label>Overall Score</label>
                        <input
                          type="text"
                          className="form-control"  
                          name="score"
                          onChange={(e)=>this.props.handleChange(e)} 
                        />
                        
                      </div>
                      <div className="col-sm-6 form-group">
                        <label>Product Description</label>
                        <input
                          type="text"
                          className="form-control" 
                          name="description"
                          
                          onChange={(e)=>this.props.handleChange(e)} 
                        />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label>Funding History</label>
                        <input
                          type="text"
                          className="form-control" 
                          name= "history"
                          onChange={(e)=>this.props.handleChange(e)}   
                        />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label>Founded</label>
                        <input
                          type="text"
                          className="form-control" 
                          name="founded"
                          onChange={(e)=>this.props.handleChange(e)} 
                        />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label>Key Investors</label>
                        <input
                          type="text"
                          className="form-control"  
                          name="investors"
                          onChange={(e)=>this.props.handleChange(e)} 
                        />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label>Founders</label>
                        <input
                          type="text"
                          className="form-control" 
                          name="founders"
                          onChange={(e)=>this.props.handleChange(e)} 
                        />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label>Pricing</label>
                        <input
                          type="text"
                          className="form-control" 
                          name="pricing" 
                          onChange={(e)=>this.props.handleChange(e)} 
                        />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label>Features</label>
                        <input
                          type="text"
                          className="form-control" 
                          name="features"
                          onChange={(e)=>this.props.handleChange(e)} 
                        />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label>Customer Care Studies</label>
                        <input
                          type="text"
                          className="form-control" 
                          name="studies"
                          onChange={(e)=>this.props.handleChange(e)} 
                        />
                      </div>
                      
                      <div className="modal-footer">
                      <div className="col-sm-6 form-group">
                        <label></label>
                        <input
                          className={this.props.errors?"btn btn-danger":"btn btn-success"}
                          style={{ width: "100px" }}
                          value="Save"
                          onClick={this.props.save}
                        />
                        {this.props.errors?<span style={{color:"red"}}>Fill all the fields</span>:null}
                      </div>
                      </div>
                    </form>
                  </div>:null}
                  {this.props.editPart==="addrow"?
                  <div className="modal-body">
                    <form
                      className="row"
                      id="create-project-form"
                      enctype="multipart/form-data"
                    >
                      <div className="col-sm-12 form-group">
                        <label>Add Company Info</label>
                        {this.props.vendors?this.props.vendors.map(vendor =><div>
                          <div className="col-sm-6 form-group">
                          <label>{vendor.name}'s Company Info</label>
                          <input
                            type="text"
                            className="form-control" 
                            name="info"
                             onChange={(e)=>this.props.handleChange(e)} 
                          />
                        </div></div>
                        ):null}
                        
                        
                      </div>
                      
                      
                      <div className="modal-footer">
                      <div className="col-sm-6 form-group">
                        <label></label>
                        <input
                          className={this.props.errors?"btn btn-danger":"btn btn-success"}
                          style={{ width: "100px" }}
                          value="Save"
                          onClick={this.props.save}
                        />
                        {this.props.errors?<span style={{color:"red"}}>Fill all the fields</span>:null}
                      </div>
                      </div>
                    </form>
                  </div>:null}
               

                
                

                
               
              
            </div>
          </div>
        </div>

        <div className="modal-backdrop show"></div>
       </div> 
      </Fragment>
    );
  }
}

export default AddVendor;
