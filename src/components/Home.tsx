import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../store";

class Home extends React.Component<{ circuits: { circuitId: any, circuitName: any, Location: any }[], fetchData: (...args: any[]) => any }> {

    static serverFetch = fetchData;

    componentDidMount() {
        if (this.props.circuits.length <= 0) {
            this.props.fetchData();
        }
    }

    render() {
        const { circuits } = this.props;

        return (
            <div>
                <h2>F1 2018 Season Calendar</h2>
                <ul>
                    {circuits.map(({ circuitId, circuitName, Location }) => (
                        <li key={circuitId} >{circuitName} - {Location.locality}, {Location.country}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state: { [key: string]: any }) => ({
    circuits: state.data,
});

const mapDispatchToProps = {
    fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
