# Specifying Basic Measurement Settings

Module: WCDMA Measurements
Source: af2c72608241400b.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA TPC Measurement
 > 
Programming
 > 
Measurements with Combined Signal  Path Scenario
 > 
Specifying Basic Measurement Settings
Specifying Basic Measurement Settings
// *****************************************************************************
// System-Reset
// *****************************************************************************
*RST; *OPC?
*CLS; *OPC?
// *****************************************************************************
// Define the error handling.
// *****************************************************************************
CONFigure:WCDMa:MEAS:TPC:MOEXception ON
CONFigure:WCDMa:MEAS:TPC:TOUT 1800
// *****************************************************************************
// Activate the combined signal path scenario and select instance 1 of the
// signaling application as master.
// *****************************************************************************
ROUTe:WCDMa:MEAS:SCENario:CSPath 'WCDMA Sig1'
// *****************************************************************************
// Use the commands of the signaling application to define the signal routing
// and to perform the RF and analyzer settings.
// *****************************************************************************
CONFigure:WCDMa:MEAS:UECHannels:BSFSelection MAN
...
// *****************************************************************************
// Use the wizard provided by the signaling application to configure a signal
// suitable for "Max. Power E-DCH" subtest 1.
// This action selects also the TPC setup.
// Query the measurement mode (must be MPED).
// *****************************************************************************
CONFigure:WCDMa:SIGN:PSETtings:HUMP S1
CONFigure:WCDMa:SIGN:PSETtings HUMP
CONFigure:WCDMa:MEAS:TPC:MODE?
// *****************************************************************************
// Configure the "Max Power E-DCH" mode:
// Set the measurement length and enable auto execution.
// *****************************************************************************
CONFigure:WCDMa:MEAS:TPC:MPEDch:MLENgth 30
CONFigure:WCDMa:MEAS:TPC:MPEDch:AEXecution ON
// *****************************************************************************
// Set the measurement length for the "Change of TFC" mode.
// *****************************************************************************
CONFigure:WCDMa:MEAS:TPC:CTFC:MLENgth 4
// *****************************************************************************
// Specify the uplink channel configuration, so that the expected power step
// size can be calculated for the "Change of TFC" mode.
// ***************************************************************************** 
CONFigure:WCDMa:MEAS:UECHannels:CARRier1:DPCCh ON,4,256
CONFigure:WCDMa:MEAS:UECHannels:CARRier1:DPDCh ON,14,64
CONFigure:WCDMa:MEAS:UECHannels:CARRier1:HSDPcch:CONFig ACK
CONFigure:WCDMa:MEAS:UECHannels:CARRier1:HSDPcch ON,50,256
CONFigure:WCDMa:MEAS:UECHannels:CARRier1:EDPCch1 ON,20,256
CONFigure:WCDMa:MEAS:UECHannels:CARRier1:EDPDch2 ON,160,4
Top