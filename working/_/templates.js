    var entriesTable = "<table><thead><th>ID#:Item</th><th>Interpretations</th><th>Labels</th><th>Alternates</th>" + 
                      "</thead><tbody>" +
                      "<% _.each(dataset, function(item) { %>" + 
                      "<tr class='iteration'>" +
                        "<td class='fidForm'><%= item.fid %><%= item.form %></td>" +
                        "<td class='interpretations'><%= item.interpretations %></td>" +
                        "<td class='labels'><%= item.tags %></td></tr>" +
                        "<td class='alternates'><%= item.alternates %></td>" +
                      "<% }); %>" +
                      "</tbody></table>";
