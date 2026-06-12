# Configure Audio Profile

Module: Bluetooth Signaling
Source: d49ba7eeee214a94.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Programming
 > 
Signaling Application
 > 
Configure Audio Profile
Configure Audio Profile
// *****************************************************************************
// Set operating mode to audio profile test with the role of master.
// Specify audio profile role, PIN, security mode. Enable the indication
// of an active call at startup. Use CSVD codec.
// *****************************************************************************
CONFigure:BLUetooth:SIGN:OPMode PROF; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:CMW:ROLE MAST; *OPC?
CONFigure:BLUetooth:SIGN:AUDio:PRFRole HNDF; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:AUDio:PINCode 'azxy'; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:AUDio:SECMode SEC3; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:AUDio:HFP:CASTartup ON; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:AUDio:CODec CVSD
// *****************************************************************************
// Establish an audio connection, if necessary increase/decrease 
// microphone gain and speaker volume. Query the audio link parameters. 
// *****************************************************************************
CALL:BLUetooth:SIGN:CONNection:ACTion HFPConnect
WHILE FETCh:BLUetooth:SIGN:CONNection:STATe? <> "HFC"
CONFigure:BLUetooth:SIGN:CONNection:AUDio:VOLControl:MICGain 8; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:AUDio:VOLControl:SPEaker 6; *OPC?
SENSe:BLUetooth:SIGN:CONNection:AUDio:LINFo?
/ *****************************************************************************
// Change audio profile role to A2DP, set audio link parameters: codec,
// .
// *****************************************************************************
CONFigure:BLUetooth:SIGN:OPMode PROF; *OPC?
CONFigure:BLUetooth:SIGN:AUDio:PRFRole ASINk; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:AUDio:A2DP:CODec SBC; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:AUDio:A2DP:SMPFrequency SF48; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:AUDio:A2DP:CHMode JST; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:AUDio:A2DP:BLKLength BL12; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:AUDio:A2DP:SUBBands SB8; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:AUDio:A2DP:ALCMethod LOUD; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:AUDio:A2DP:MINBitpool 2; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:AUDio:A2DP:MAXBitpool 8; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:AUDio:A2DP:ACCSlave OFF; *OPC?
// *****************************************************************************
// Establish an audio connection, if necessary increase/decrease microphone
// gain and speaker volume. Query the audio link parameters and bit rate. 
// *****************************************************************************
CALL:BLUetooth:SIGN:CONNection:ACTion ADConnect
WHILE FETCh:BLUetooth:SIGN:CONNection:STATe? <> "A2Connected"
CONFigure:BLUetooth:SIGN:CONNection:AUDio:VOLControl:MICGain 8; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:AUDio:VOLControl:SPEaker 6; *OPC?
SENSe:BLUetooth:SIGN:CONNection:AUDio:LINFo?
CONFigure:BLUetooth:SIGN:CONNection:AUDio:A2DP:BITRate?
Top