<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        .flex {
            /* basic styling */
            width: 350px;
            height: 200px;
            /*border: 1px solid #555;*/
            font: 14px Arial;

            /* flexbox setup */
            display: flex;
            flex-direction: row;
        }

        .flex > div {
            flex: 1 1 auto;
            width: 30px; /* To make the transition work nicely. (Transitions to/from
                        "width:auto" are buggy in Gecko and Webkit, at least.
                        See http://bugzil.la/731886 for more info.) */
            transition: width 0.7s ease-out;
        }

        /* colors */
        .flex > div:nth-child(1){ background: #009246; }
        .flex > div:nth-child(2){ background: #F1F2F1; }
        .flex > div:nth-child(3){ background: #CE2B37; }

        /*.flex > div:hover {
            width: 200px;
        }*/

    </style>
</head>
<body>
<p>Flexbox nuovo</p>
<div class="flex">
    <div>uno</div>
    <div>due</div>
    <div>tre</div>
</div>
<div class="flex">
    <div>lsdfksdlfksdlfksdlf</div>
</div>
<div class="flex">
    <div>asdf</div>
    <div>fdsa</div>
    <div>asdf</div>
</div>
</body>
</html>