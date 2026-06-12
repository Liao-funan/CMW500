# Setting Up an Audio CS Connection

Module: WCDMA Signaling
Source: 33dba8e9162a406c.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
Signaling Application
 > 
Setting Up an Audio CS Connection
Setting Up an Audio CS Connection
Connect the DUT with the audio connectors provided by the R&S
 
CMW with an installed audio board. For the detailed information, refer to the user manual of the audio measurements application.
// ***************************************************************************** 
// Select the voice UE terminated connection, set date source to speech,
// enable speech DTX indication. Set up a mobile terminated connection.
// Query the connection state until it equals CEST (call established).
// Query the speech connection delay.
// ***************************************************************************** 
CONFigure:WCDMa:SIGN:CONNection:UETerminate VOIC
CONFigure:WCDMa:SIGN:CONNection:VOICe:SOURce SPE
CONFigure:WCDMa:SIGN:CONNection:VOICe:DTX ON
CALL:WCDMa:SIGN:CSWitched:ACTion CONNect
WHILE FETCh:WCDMa:SIGN:CSWitched:STATe? <> "CEST"
SENSe:WCDMa:SIGN:CVINfo?
Top