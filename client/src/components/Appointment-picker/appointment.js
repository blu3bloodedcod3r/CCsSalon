import React from 'react';
import AppointmentPicker from 'appointment-picker';
import '../../../node_modules/appointment-picker/dist/appointment-picker.css';
import '~appointment-picker/css/appointment-picker';

export default function Appointments() {

    return (
        <div>
            <article>
                <h1>Appointment Picker Examples</h1>

                <h2>AppointmentPicker</h2>
                <p>
                    <label for="time">Time</label>
                    <input id="time" type="text" value="10:05" placeholder="hh:mm" aria-label="Use up or down arrow keys to change time" aria-live="assertive"/>
                </p>

                <p>
                    Define your own <strong>template</strong> containing a custom JavaScript invocation (via a custom button):
                    <ul>
                        <li>
                            <code>templateOuter</code>: frame html template, contains wrapper, title and optional functions; must contain <strong>{{innerHtml}}</strong> placeholder
                        </li>
                        <li>
                            <code>templateInner</code>: iterated input html template (optionally wrapped in some list item); must contain <strong>{{time}}</strong> placeholder and an optional <strong>{{disabled}}</strong> placeholder
                        </li>

                    </ul>
                </p>

                <pre>// Create picker reference
                var ap = new AppointmentPicker(document.getElementById('time'), {
                    interval: 15,
                    startTime: 10,
                    endTime: 18,
                    disabled: ['11:20', '13:30', '14:00', '15:30', '16:45', '17:00'],
                    templateInner: '&lt;li class="appo-picker-list-item {{disabled}}"&gt;&lt;input type="button" value="{{time}}" {{disabled}}&gt;&lt;/li&gt;',
                    templateOuter: '&lt;div class="your-wrapper"&gt;&lt;button class="your-close" onclick="closePicker()"&gt;Close&lt;/button&gt;&lt;span class="your-title"&gt;Custom Markup&lt;/span&gt;&lt;ul class="appo-picker-list"&gt;{{innerHtml}}&lt;/ul&gt;&lt;button class="your-set-time" onclick="setTime('15:00')"&gt;Set 15:00&lt;/button&gt;&lt;/div&gt;'
                });

                function setTime(timeString) {
                    ap.setTime(timeString);
                }

                function closePicker() {
                    ap.close();
                }</pre>

                <script type="text/javascript">
                            // Create picker reference
                            var ap = new AppointmentPicker(document.getElementById('time'), {
                                templateInner: `<div class="appo-picker-list-item {{disabled}}"><input type="button" value="{{time}}" {{disabled}}/></div>`,
                                templateOuter: '<div class="your-wrapper"><button class="your-close" onclick="closePicker()">Close</button><span class="your-title">Custom Markup</span><div class="appo-picker-list">{{innerHtml}}</div><button class="your-set-time" onclick="setTime(\'15:00\')">Set 15:00</button></div>',
                                interval: 15,
                                startTime: 10,
                                endTime: 18,
                                disabled: ['11:20', '13:30', '14:00', '15:30', '16:45', '17:00']
                            });

                            function setTime(timeString) {
                                ap.setTime(timeString);
                            }

                            function closePicker() {
                                ap.close();
                            }
                        </script>

            </article>

        </div>
    )
  }