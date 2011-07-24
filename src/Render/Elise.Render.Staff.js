//
//  Elise : Javascript Library rendering Music Scores
//  Copyright (C) 2011 Rodolphe Belouin <rodolphe.belouin@gmail.com>
//  Copyright (C) 2011 Vincent Giersch <vincent@giersch.fr>
//
//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

Elise.Render.Staff = function(render, system, id, measures) {
    if (system === undefined || id === undefined)
        return Elise.error('You must set the render, the system and the staff id');

    this.render = render;
    this.system = system;
    this.cursor = null;
    this.measures = measures || [];
    this.id = id;

    this.document = this.system.getDocument().append('<g class="s' + this.id + '" />')
                                            .children('.s' + this.id);
};

Elise.Render.Staff.prototype = {
      render: function(cursor) {
          cursor = this.renderLines(cursor);
          return cursor;
      },
      renderLines: function(cursor) {
          this.document.append('<line x1="350" y1="100" x2="450" y2="100">');
          return cursor;
      }
};