import React from 'react';
import AppointmentPicker from 'appointment-picker';
import '../../../node_modules/appointment-picker/css/appointment-picker.css';

class AppoPicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = { time: {} };
        this.pickerRef = React.createRef();
        this.onTimeSelect = this.onTimeSelect.bind(this);
    }

    onTimeSelect(event) {
        console.log('change.appo.picker', event.time);
        this.setState({ time: event.time });
        // Or do something different with your time object
    }

	render() {
        return (
            <div>
                <input type="text" ref={ this.pickerRef }></input>
                <code>{ JSON.stringify(this.state.time) }</code>
            </div>);
	}

    componentDidMount() {
    	this.picker = new AppointmentPicker(this.pickerRef.current, {});
        this.pickerRef.current.addEventListener('change.appo.picker', this.onTimeSelect);
    }
}