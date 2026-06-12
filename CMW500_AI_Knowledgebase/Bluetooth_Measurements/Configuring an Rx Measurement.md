# Configuring an Rx Measurement

Module: Bluetooth Measurements
Source: 1ff31a71690642c0.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Programming
 > 
Rx Measurements
 > 
Configuring an Rx Measurement
Configuring an Rx Measurement
// *****************************************************************************
// System-Reset
// *****************************************************************************
*RST; *OPC?
*CLS; *OPC?
// *****************************************************************************
// Initial configuration to create temporary ARB file: set automatic 
// detection, specify routing, set burst type LE, PHY LE1M, advertiser
// packet type. Specify advertiser channel frequency, or alternatively
// channel index. Set no measurement stop condition, disable 
// measure on exception, enable only PvT and modulation
// views, set modulation and PvT statistic count to 1, set instrument
// address and address type.Enable ARB generation and start Tx measurement. 
// *****************************************************************************
CONFigure:BLUetooth:MEAS:ISIGnal:DMODe AUTO
ROUTe:BLUetooth:MEAS:SCENario:SALone R11,RX11
CONFigure:BLUetooth:MEAS:ISIGnal:BTYPe LE
CONFigure:BLUetooth:MEAS:ISIGnal:LENergy:PHY LE1M       
CONFigure:BLUetooth:MEAS:ISIGnal:PTYPe:LENergy ADV
CONFigure:BLUetooth:MEAS:RFSettings:FREQuency   2402
CONFigure:BLUetooth:MEAS:RXQuality:AINDex 37
CONFigure:BLUetooth:MEAS:MEValuation:SCONdition NONE           
CONFigure:BLUetooth:MEAS:MEValuation:MOEXception OFF            
CONFigure:BLUetooth:MEAS:MEValuation:RESult:ALL OFF,OFF,ON,OFF,OFF,OFF,
 OFF,OFF,ON,OFF,OFF,OFF,OFF,OFF
CONFigure:BLUetooth:MEAS:MEValuation:SCOunt:MODulation 1           
CONFigure:BLUetooth:MEAS:MEValuation:SCOunt:PVTime 1           
CONFigure:BLUetooth:MEAS:RXQuality:SADDress #H1234
CONFigure:BLUetooth:MEAS:RXQuality:SATYpe PUBL               
CONFigure:BLUetooth:MEAS:RXQ:GARB ON             
// *****************************************************************************
// Execute training phase: Start TX Measurement, return PvT and 
// modulation current results, payload length, advertiser address, 
// packet and pattern type. Disable ARB file generation.
// *****************************************************************************
INITiate:BLUetooth:MEAS:MEValuation                      
                                       
FETCh:BLUetooth:MEAS:MEValuation:PVTime:LENergy:LE1M:CURR?
FETCh:BLUetooth:MEAS:MEValuation:MODulation:LENergy:LE1M:CURR?                                       
FETCh:BLUetooth:MEAS:ISIGnal:ADETected:PLENgth:LENergy:LE1M? 
FETCh:BLUetooth:MEAS:ISIGnal:ADETected:AADDress:LENergy:LE1M? 
FETCh:BLUetooth:MEAS:ISIGnal:ADETected:PTYPe:LENergy:LE1M? 
FETCh:BLUetooth:MEAS:ISIGnal:ADETected:PATTern:LENergy:LE1M? 
                                       
CONFigure:BLUetooth:MEAS:RXQ:GARB OFF     
// *****************************************************************************
// Alternatively to measure at multiple channels, use list mode: enable
// list mode, specify the number of segments, enable only 
// modulation and PvT measurements, set statistic count to 1.
// Start TX Measurement, return PvT and modulation current results.
// Disable list mode. Disable ARB file generation.
// *****************************************************************************       
CONFigure:BLUetooth:MEAS:MEValuation:LIST:COUNTt 2
CONF:BLUetooth:MEAS:MEV:LIST:SEGM1:SET LE,ADV,OTH,27,1,1,OFF,7,2426E+6,NARR,ON
CONF:BLUetooth:MEAS:MEV:LIST:SEGM2:SET LE,ADV,OTH,27,1,1,OFF,7,2480E+6,NARR,ON
CONFigure:BLUetooth:MEAS:MEValuation:LIST:SEGM1:RESult ON,ON,OFF,OFF,OFF
CONFigure:BLUetooth:MEAS:MEValuation:LIST:SEGM2:RESult ON,ON,OFF,OFF,OFF
CONFigure:BLUetooth:MEAS:MEValuation:LIST:SEGM1:SCOunt 1,1,1,1,1
CONFigure:BLUetooth:MEAS:MEValuation:LIST:SEGM2:SCOunt 1,1,1,1,1
INITiate:BLUetooth:MEAS:MEValuation                    
                                       
FETCh:BLUetooth:MEAS:MEValuation:LIST:SEGM1:MODulation:CURRent?                                      
FETCh:BLUetooth:MEAS:MEValuation:LIST:SEGM2:MODulation:CURRent?
FETCh:BLUetooth:MEAS:MEValuation:LIST:SEGM1:PVTime:CURRent?                                      
FETCh:BLUetooth:MEAS:MEValuation:LIST:SEGM2:PVTime:CURRent?                                       
CONFigure:BLUetooth:MEAS:RXQ:GARB OFF                                
// *****************************************************************************
// Configure Rx measument: Enable the processing of ARB files and select 
// RF output path routing, external attenuation and measurement mode. 
// *****************************************************************************
CONFigure:BLUetooth:MEAS:RXQuality:GARB ON
CONFigure:BLUetooth:MEAS:RXQuality:ROUTe R11,RX11
CONFigure:BLUetooth:MEAS:RXQuality:ROUTe:USAGe:ALL R118,ON,OFF,OFF,OFF,
 OFF,OFF,OFF,OFF
CONFigure:BLUetooth:MEAS:RXQuality:EATTenuation:OUTPut 5
CONFigure:BLUetooth:MEAS:RXQuality:MMODe SENS
// *****************************************************************************
// For PER measurement, set Tx level and number of SCAN_REQ advertisers, 
// to be sent.
// *****************************************************************************
CONFigure:BLUetooth:MEAS:RXQuality:PER:LEVel -40
CONFigure:BLUetooth:MEAS:RXQuality:PER:RXPackets 1000
// *****************************************************************************
// For sensitivity search measurement, set number of retry attempts,
// initial Tx level and decrease power step.
// *****************************************************************************
CONFigure:BLUetooth:MEAS:RXQuality:SENSitivity:RETRy 2
CONFigure:BLUetooth:MEAS:RXQuality:SENSitivity:STARtlevel -40
CONFigure:BLUetooth:MEAS:RXQuality:SENSitivity:STEPsize 1
// *****************************************************************************
// For spot check, set Tx level.
// *****************************************************************************
CONFigure:BLUetooth:MEAS:RXQuality:SPOTcheck:LEVel -40
// *****************************************************************************
// Set  trigger source to Bluetooth Meas:Power.
// *****************************************************************************
TRIGger:BLUetooth:MEAS:MEValuation:SOURce 'Bluetooth Meas:Power'
Top