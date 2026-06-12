# Performing a Neighbor Cell Measurement with CM

Module: WCDMA Signaling
Source: 152b2f69927f4db5.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
Signaling Application
 > 
Performing a Neighbor Cell Measurement with CM
Performing a Neighbor Cell Measurement with CM
To perform the UE neighbor cell measurement with compressed mode, proceed as follows:
Configure the neighbor cells, see 
"Configuring Network Settings"
Enable the UE measurement report for GSM, WCDMA, and LTE neighbor cell measurement, see 
"Configuring UE Measurement Report Settings"
Configure the compressed mode as follows:
// *****************************************************************************
// Specify single transmission gap pattern type C, enabled
// for the duration of a UE report measurement.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CMODe:PATTern SINGle
CONFigure:WCDMa:SIGN:CMODe:SINGle:TYPE C
CONFigure:WCDMa:SIGN:CMODe:SINGle:ACTivation MEAS
// *****************************************************************************
// Alternatively specify UE report pattern for WCDMA and LTE neighbor
// cells measurement, enabled for the duration of a UE report measurement.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CMODe:PATTern UER
CONFigure:WCDMa:SIGN:CMODe:UEReport:ENABle ON, OFF, OFF, OFF, ON
CONFigure:WCDMa:SIGN:CMODe:UEReport:ACTivation MEAS, RAB, RAB, RAB, MEAS
// *****************************************************************************
// Alternatively specify and activate pattern for UL compressed mode TX test,
// type B.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CMODe:PATTern ULCM
CONFigure:WCDMa:SIGN:CMODe:ULCM:TYPE B
CONFigure:WCDMa:SIGN:CMODe:ULCM:ACTivation
Establish connection, see 
"Setting Up a CS Connection (Signaling)"
Retrieve the neighbor cell report, see 
"Retrieving Information Provided by the UE (Signaling)"
Top