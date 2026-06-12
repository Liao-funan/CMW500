# Using the Arbitrary Mode

Module: GPRF Generator
Source: 9d9be11b11564d62.htm

## 原始指令文档说明
GPRF Generator
 > 
Programming
 > 
Using the Arbitrary Mode
Using the Arbitrary Mode
// *****************************************************************************
// Activate arbitrary mode in combination with list mode, select single
// shot mode with 100 cycles and 1000 additional samples, enable modulation
// in 4 out of 5 frequency/level steps and load waveform file.
// Query properties of waveform file.
// *****************************************************************************
SOURce:GPRF:GEN:BBMode ARB
SOURce:GPRF:GEN:ARB:REPetition SINGle
SOURce:GPRF:GEN:ARB:CYCles 100
SOURce:GPRF:GEN:ARB:ASAMPles 1000
SOURce:GPRF:GEN:LIST:INCrement 'GPRF Gen1: Waveform Marker 4'
SOURce:GPRF:GEN:LIST:MODulation:ALL ON, ON, ON, OFF, ON
SOURce:GPRF:GEN:ARB:FILE 'D:\Rohde-Schwarz\CMW\Data\waveform\GSM1.wv'
SOURce:GPRF:GEN:ARB:FILE:DATE?
SOURce:GPRF:GEN:ARB:FILE:VERSion?
SOURce:GPRF:GEN:ARB:CRATe?
SOURce:GPRF:GEN:ARB:SAMPles?
SOURce:GPRF:GEN:ARB:LOFFset?
SOURce:GPRF:GEN:ARB:POFFset?
SOURce:GPRF:GEN:ARB:MSEGment:NUMBer?
SOURce:GPRF:GEN:ARB:MSEGment:CRATe?
SOURce:GPRF:GEN:ARB:MSEGment:SAMPles?
SOURce:GPRF:GEN:ARB:MSEGment:DURation?
SOURce:GPRF:GEN:ARB:MSEGment:NAME?
SOURce:GPRF:GEN:ARB:MSEGment:PAR?
SOURce:GPRF:GEN:ARB:MSEGment:POFFset?
// *****************************************************************************
// Enable and configure the trigger system for (re-)starting a waveform  
// file. Load the file and restart it using the manual trigger. Select
// a marker 2 trigger, define marker delay, and load new waveform file. 
// *****************************************************************************
TRIGger:GPRF:GEN:ARB:RETRigger ON
TRIGger:GPRF:GEN:ARB:AUTostart ON
SOURce:GPRF:GEN:ARB:FILE 'D:\Rohde-Schwarz\CMW\Data\waveform\GSM2.wv'
TRIGger:GPRF:GEN:ARB:MANual:EXECute
// *****************************************************************************
// Define marker delays, reset and then configure a user-defined trigger 
// *****************************************************************************
SOURce:GPRF:GEN:ARB:MARKer:DELays 500, 500, 500, 500
SOURce:GPRF:GEN:ARB:UDMarker:CLISt
SOURce:GPRF:GEN:ARB:UDMarker?
SOURce:GPRF:GEN:ARB:UDMarker 501, REDGe, 1, 100, 500, OFF, OFF, OFF, OFF, OFF
// *****************************************************************************
// Configure multi-segment settings and load a multi-segment file.
// Query the current segment, and switch to the next segment. 
// *****************************************************************************
TRIGger:GPRF:GEN:ARB:SEGMents:MODE CONTinuous
SOURce:GPRF:GEN:ARB:FILE 'D:\Rohde-Schwarz\CMW\Data\waveform\GSM2_seg.wv'
SOURce:GPRF:GEN:ARB:SEGMents:CURRent?
SOURce:GPRF:GEN:ARB:SEGMents:NEXT?
TRIGger:GPRF:GEN:ARB:SEGMents:MANual:EXECute
// *****************************************************************************
// Start a single generator list cycle, using the GPRF Power measurement
// and the marker signal to increment the list. Define steps no. 1, 2, and 3 
// as reenabled (retriggered) steps. 
// *****************************************************************************
SOURce:GPRF:GEN:LIST:REPetition SINGle
SOURce:GPRF:GEN:LIST:INCrement 'GPRF Gen1: Waveform Marker 4'
INITiate:GPRF:MEAS:POWer
WHILE FETCh:GPRF:MEAS:POWer:STATus? <> ON
SOURce:GPRF:GEN:LIST:INCrement:ENABling:CATalog?
SOURce:GPRF:GEN:LIST:INCrement:ENABling 'GPRF Meas1: Power'
SOURce:GPRF:GEN:LIST:REENabling:ALL ON, OFF, ON, OFF, OFF
SOURce:GPRF:GEN:LIST:REENabling 2, ON
SOURce:GPRF:GEN:LIST:ESINGle
Top