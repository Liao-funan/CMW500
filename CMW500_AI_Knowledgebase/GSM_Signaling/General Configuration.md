# General Configuration

Module: GSM Signaling
Source: a43742d43b6b4f20.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
General Configuration
The GSM signaling application is programmed as follows:
The application is controlled by SCPI commands with the following syntax: 
...:GSM:SIGN:...
After a 
*RST
, the DL signal is switched off.
To activate the DL signal use 
SOURce:GSM:SIGN:CELL:STATe ON
.
Query the cell state using 
SOURce:GSM:SIGN:CELL:STATe:ALL?
. The result 
ON,ADJ
 indicates that the DL signal is available.
To initiate a connection setup in the CS domain use 
CALL:GSM:SIGN:CSWitched:ACTion CONNect
.
To initiate a connection setup in the PS domain, use 
CALL:GSM:SIGN:PSWitched:ACTion CONNect
.
To query the connection states use 
FETCh:GSM:SIGN:CSWitched:STATe?
 and 
FETCh:GSM:SIGN:PSWitched:STATe?
.
The following sections describe how to configure the signaling application.
The subsequent sections describe how to switch on the cell signal and the MS and how to set up a CS or PS connection. Some examples for actions  possible after connection setup are also given.
Contents
Specifying General Settings
Configuring BCCH, TCH and PDCH
Configuring Internal Fading
Configuring Neighbor Cell and Reselection Parameters
Configuring Network and MS Identities
Configuring Requested Mobile Data
Configuring Cell Parameters
Setting Timers and Constants
Configuring Reject Causes
Configuring Security Settings
Configuring Common Connection Settings
Configuring General CS Connection Settings
Configuring AMR Settings
Configuring VAMOS Support
Configuring PS Connection Settings
Configuring Trigger Signals
Configuring Message Monitoring
Switching On the Cell Signal and the MS
Configuring the I/Q Settings
Querying MS Capabilities
Querying MS Info
Configuring MS Measurement Reports
Querying MS Measurement Reports
Setting Up a CS Connection
Setting Up an Audio CS Connection
Retrieving CS Receiver Reports
Sending / Receiving an SMS
Sending a Cell Broadcast Message
Sending Date and Time Information to the MS
Performing an Intra-GSM CS Handover
Performing an Inter-RAT CS Handover
Performing a CS Handover to Another Instrument
Setting Up a PS Connection
Retrieving PS Receiver Reports
Performing an Intra-GSM PS Handover
Performing a Cell Change Order
Performing an Inter-RAT Handover to GSM
Top