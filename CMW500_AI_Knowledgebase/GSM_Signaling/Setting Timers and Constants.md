# Setting Timers and Constants

Module: GSM Signaling
Source: 3fc24b58c55e4513.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Setting Timers and Constants
Setting Timers and Constants
// *****************************************************************************
// Set the radio link timeout on the MS and BS 
// to 24 missing SACCH blocks (~11.5 s).
// *****************************************************************************
CONFigure:GSM:SIGN:CELL:RTMS 24
CONFigure:GSM:SIGN:CELL:RTBS 24
// *****************************************************************************
// Specify the timeout for unanswered mobile-terminating and
// mobile-originating calls.
// *****************************************************************************
CONFigure:GSM:SIGN:CELL:ATIMeout 1
CONFigure:GSM:SIGN:CELL:ATIMeout:MOC 1
// *****************************************************************************
// Tell the mobile 
// - to perform a periodic location update every 6 minutes (Timer T3212) 
// - not to perform periodic routing area updates (Timer T3312)
// *****************************************************************************
CONFigure:GSM:SIGN:CELL:PLUPdate 1
CONFigure:GSM:SIGN:CELL:PRAupdate 0
// *****************************************************************************
// Set the CS and PS immediate assignment reject timer.
// *****************************************************************************
CONFigure:GSM:SIGN:CELL:CSWitched:IARTimer 255
CONFigure:GSM:SIGN:CELL:PSWitched:IARTimer 255
// *****************************************************************************
// Set the PS TBF release timer.
// *****************************************************************************
CONFigure:GSM:SIGN:CELL:PSWitched:TRTimer 5
Top